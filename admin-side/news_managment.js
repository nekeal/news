function news_managment() {

    //keep in mind functions below use global array of objects News
    //you'll find it in news.js 

    var index;

    function fixTitles(){
        clearTimeout(TitlesRefreshTimeout);
        news();
    };

    function removeNews(index,callback){
        
        var id=News[index].id;

        dpd.users.me(function(result, error) {
                dpd.news.put(id, {"status":0}, function(result, err) {
                    if(err) return console.log(err);
                    console.log(result, result.id);
                    callback();
                });

        });
    };

    $(".options-button").click(function () {

        index = $(".options-button").index(this);


        if (index == News.length) {
            $("#")
        } else {

            $(".title").removeClass("active");
            $(".options-button").removeClass("inactive");

            $("#options-form").show();
            $(".title").eq(index).addClass("active");
            $(".options-button").eq(index).addClass("inactive");

        }

    });

    $(".exit").click(function () {

        $("#options-form").hide();
        $(".title").eq(index).removeClass("active");
        $(".options-button").eq(index).removeClass("inactive");

    });

    $("#archive-button").click(function () {

        $("#options-form").hide();
        $("#archive-form").show();

    });

    $("#yes-button").click(function () {

        $("#archive-form").hide();
        $(".title").eq(index).removeClass("active");
        $(".options-button").eq(index).removeClass("inactive");
                    
        removeNews(index, fixTitles);

    });

    $("#no-button").click(function () {

        $("#archive-form").hide();
        $("#options-form").show();

    });

};