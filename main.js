$(document).ready(function(){       
    $('.intro').addClass('animate__animated animate__hinge animate__delay-3s animate__slower');
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos <=600) {
            $("nav").css('background-color', '#efc1db');
            $('a svg').css('color',"#000");
        } else {
            $("nav").css('background-color', '#8f5575');
            $('a svg').css('color',"#fff");
        }
    });
});