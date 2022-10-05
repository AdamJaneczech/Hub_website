$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
        if (scroll > 1) {
          $(".navbar").css("background" , "#272727");
          $(".navbar").css("transition", "0.5s ease-in-out");
        }
  
        else{
            $(".navbar").css("background-image" , "radial-gradient(circle, #272727 40%, transparent 10%), radial-gradient(circle, #272727 40%, transparent 10%), url(\"./Grafika/arduino_background.png\")");   
            $(".navbar").css({"background-blend-mode" : "normal, normal, luminosity"});
            $(".navbar").css({"background-size" : "8px 5px, 8px 5px, auto"});
            $(".navbar").css({"background-attachment" : "fixed, fixed, fixed"});
            $(".navbar").css({"background-position" : "0 0, 4px 2px, 0 0"});
            $(".navbar").css({"transition" : "0.5s ease-in-out"});
          }
    })
  })