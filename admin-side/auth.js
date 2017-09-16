function login() {

    console.log("trying to login...");

    $("#login-form input").removeClass("auth-error");
    $("h4").hide();

    var password = $("#password").val();
    var login = $("#login").val();

    dpd.users.login({
        username: login,
        password: password
    }, function (result, error) {

        if (!error) {
            $(".container").show();
            $("#login-page").hide();
            console.log("logged in successful");

        } else {
            $("#login-form input").addClass("auth-error");
            $("h4").show();
            console.log("failed to log in");
        }

    });

};

function logout() {

    $("#login-form input").removeClass("auth-error");
    $("h4").hide();
    dpd.users.logout(function (result, error) {

        if (!error) {
            $(".container").hide();
            $("#login-page").show();
            console.log("logged out successful");

        } else {
            alert("Failed to log out");
            console.log("failed to log out");
        }

    });


};
