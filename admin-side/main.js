$(function () {

    dpd.users.me(function (result, error) {

        if (!result) {
            $(".container").hide();
            $("#login-page").show();
        } else {
            $(".container").show();
            $("#login-page").hide();
        }

    });

    $('form').submit(function(e){ e.preventDefault(); });


    $("#login-button").click(function () {

        //auth.js
        login();

    });

    $("#logout-button").click(function () {

        //auth.js
        logout();

    });


    //news.js
    news();

    //news_managment.js
    news_managment();

});