$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
        if (scroll > 54) {
          $(".navbar").css("background" , "#272727");
        }
  
        else{
            $(".navbar").css("background" , "radial-gradient(circle, #272727 40%, transparent 10%), radial-gradient(circle, #272727 40%, transparent 10%), url(\"./Grafika/arduino_background.png\")");   
        }
    })
  })