////////////////////////////////////////////////////////////////////////////
//                                                                        //
//                          Scheme of callbacks                           //  
//                                                                        //   
//  |getNews|--->|refresh|--->|refreshTitles|                             //  
//                         L->|    count    |--->|replaceNews|-->|count|  //
//                                            L->|  getNews  |            //    
//                                                                        //
////////////////////////////////////////////////////////////////////////////

///////////  Variables you can change  ///////////

           var AnimationDuration = 500;
//       note that you should also modify       //
//       class .title in main.css               //
//       since CSS animations are used too      //

           var AnimationDelay    = 10000;
//       in other words time between            // 
//       singular news displayed                //

//////////////////////////////////////////////////

function news() {

    //array of news objects
    var News; 

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

    
    //count to decide whether replaceNews or getNews
    function count(c){
        console.log("count");
        if(c<News.length){
            replaceNews(c,c-1<0 ? News.length-1 : c-1 );                          
        }        
        else{
            $(".title").eq(News.length-1).removeClass('active');
            getNews(refresh);         
        }

        
    };  

    //replace News.content in container and highlight active News.title in sidebar
    function replaceNews(c,cp,st) {

        //'if' to avoid single news animation
        if(News.length>1){
            //highlight active News.title in sidebar (css animation used)
            $(".title").eq(cp).removeClass('active');
            $(".title").eq(c).addClass('active');

            //replace News.content in container (jquery animation used)
            $("#content p").eq(0).fadeOut(AnimationDuration,function (){
                $(this).remove();
            });     
            $("#content").append("<p>" + News[c].content + "</p>");
            $("#content p").hide(0,function (){
                $(this).fadeIn(AnimationDuration);
            });
        }
        else{
            //highlight active News.title in sidebar (css animation used)
            $(".title").eq(c).addClass('active');

            //replace News.content in container (no animation used)
            $("#content").append("<p>" + News[c].content + "</p>");
            $("#content p").eq(0).remove();
        }
        

        setTimeout(function () {
            count(c+1);
        },AnimationDelay);
    }

    //function refreshing titles with updated news
    function refreshTitles() { 

            for (var i = 0; i < 10; i++){

                if(i<News.length){
                    $(".title").eq(i).html("<h3>"+News[i].title+"</h3>");
                    $(".title").eq(i).removeClass("inactive");
                }
                else{
                    $(".title").eq(i).html("");
                    $(".title").eq(i).addClass("inactive");
                }

            }
    };

    function refresh () {
        
        refreshTitles();
        count(0);

    };

    getNews(refresh);

};