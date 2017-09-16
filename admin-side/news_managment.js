function news_managment() {

    //keep in mind functions below use global array of objects News
    //you'll find it in news.js 

    var index;

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

    $("#swap-button").click(function () {

        $("#options-form").hide();
        $("#swap-form").show();

    });

};