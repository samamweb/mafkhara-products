$(document).ready(function () {

    $('input[placeholder], textarea[placeholder]').placeholder();

    $('select').styler();

    //скрол к форме
    //
    $('.bxslid').bxSlider({
        infiniteLoop: false,
        hideControlOnEnd: true,
        controls: true,
        pager: false,
        
        auto: true,
        pause: 9000,
      	touchEnabled: true
    });






    $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });








});

