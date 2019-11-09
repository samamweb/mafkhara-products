$(document).ready(function () {
$('input[placeholder], textarea[placeholder]').placeholder();
    $('select').each(function(){
        $(this).siblings('p').text( $(this).children('option:selected').text() );
    });
    $('select').change(function(){
        $(this).siblings('p').text( $(this).children('option:selected').text() );
    });
    //последовательное появление блоков
    $( document ).ready(function() {

        $(function() {
            $('.s1-txt').each(function(i) {
                $(this).delay((i++) * 1500).fadeTo(3000, 1); })
        });

    });






// Задание счетчика
    $('#defaultCountdown').countdown({until: '+0d +15h 15m ',format: 'HMS'});
    $('#defaultCountdown1').countdown({until: '+0d +15h 15m ',format: 'HMS'});

});

