function clock () {
    var currentTime = new Date;
    
    var currentHours = currentTime.getHours ();
    var currentMinutes = currentTime.getMinutes ();

    

    $("#clock p").replaceWith("<p>"+(currentHours>9 ? currentHours : '0'+currentHours)+":"+(currentMinutes>9 ? currentMinutes : '0'+currentMinutes)+"</p>");

    setTimeout(function (){
        clock();
    },1000);
};