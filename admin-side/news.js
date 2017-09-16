//////////////////////////////////////////////////
//                                              //
//              Scheme of callbacks             //  
//                                              //   
//  |getNews|--->|refreshTitles|--->|getNews|   //                                                                        //
//                                              //
//////////////////////////////////////////////////

///////////  Variables you can change  ///////////

           var TitlesRefresh = 3000;
//    determines every how many miliseconds     //
//       the query to the server is send        //

//////////////////////////////////////////////////

//array of news objects (global so news_mangment() can use it) 
var News; 

function news() {


    //function updating news with database
    function getNews(callback) {
        console.log("getNews");

        //choose only status==1 news objects
        var query={"status":"1"}; 

        dpd.news.get(query,function (result, err) {
            if(err) return console.log(err);
            News = result;
            callback();
        });
    };

    //function refreshing titles with updated news
    function refreshTitles() { 

            for (var i = 0; i < 10; i++){

                if(i<News.length){

                    $(".title-var").eq(i).html("<h3>"+News[i].title+"</h3>");

                    $(".options-button").eq(i).html("&#10132;");

                    $(".title").eq(i).removeClass("inactive");
                    $(".title").eq(i).removeClass("last");

                } else if (i===News.length && i!=10) {

                    $(".title-var").eq(i).html("");

                    $(".options-button").eq(i).html("Nowe");

                    $(".title").eq(i).removeClass("inactive");
                    $(".title").eq(i).addClass("last");

                } else {

                    $(".title-var").eq(i).html("");

                    $(".title").eq(i).addClass("inactive");
                }

            }

            setTimeout(function(){
                getNews(refreshTitles);
            }, TitlesRefresh);
    };

    getNews(refreshTitles);

    $(".options-button").click( function() {
            console.log($(".options-button").index(this));
        
    });

};