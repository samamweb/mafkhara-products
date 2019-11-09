$(document).ready(function(){

    var action_day = 1;/* День */
    var action_Hours = 00;/* Часы */
    var action_Minutes = 15;/* Минуты */
    var action_Seconds = 00;/* Секунды */

    setInterval(function(){
        action_Seconds = action_Seconds - 1;

        if(action_Seconds < 0){
            action_Seconds = 59;
            action_Minutes = action_Minutes - 1;
        }

        if(action_Minutes < 0){
            action_Hours = action_Hours - 1;
            action_Minutes = 59;
        }

        if(action_Hours < 0){
            action_Hours = 12;
            action_day = action_day - 1;
        }

        if(action_day < 0){
            action_day = 1;
        }

        var hours = action_Hours;
        var minutes = action_Minutes;
        var seconds = action_Seconds;
        var day = action_day;

        if(hours < 10){
            hours = "0" + hours;
        }

        if(minutes < 10){
            minutes = "0" + minutes;
        }

        if(seconds < 10){
            seconds = "0" + seconds;
        }

        if(day < 10){
            day = "0" + day;
        }

        /* Вывод */
        $('.days').html("00");
        $('.hours').html(hours);
        $('.min').html(minutes);
        $('.seconds').html(seconds);
    },1000);

});


