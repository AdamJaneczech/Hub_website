$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
        if (scroll > 1) {
          $(".navbar").css("background" , "#272727");
        }
        else{
            $(".navbar").css({"background-image" : "url(\"./Grafika/arduino_background.png\")"});   
            $(".navbar").css({"background-blend-mode" : "luminosity"});
            $(".navbar").css({"background-size" : "auto"});
            $(".navbar").css({"background-attachment" : "fixed"});
            $(".navbar").css({"background-position" : "0 0"});
          }
    })
  })