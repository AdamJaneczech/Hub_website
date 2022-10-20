$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
        if (scroll > 1) {
          $('.navbar').removeClass("topped");
          $('.navbar').addClass("scrolled");
        }
        else{
          $('.navbar').removeClass("scrolled");
          $('.navbar').addClass("topped");
        }
    })
  })