var telNumber = "+491744912806";


jQuery(function($){

    $('.displayPhoneNr').click(function(){
        if($(".telNum").hasClass("displayed") != true){
            $('.telNum').append(telNumber).hide().fadeIn(500);
            $(".telNum").addClass('displayed');
        }
    });

});

