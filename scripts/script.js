$(document).ready(function () {
  $(".burger-button").click(() => {
    if ($(".navigation-menu-bar").css("display") == "block") {
      $(".navigation-menu-bar").fadeOut(() => {
        $(".navigation-menu-bar").css("display", "none");
      });
    } else {
      $(".navigation-menu-bar").fadeIn(() => {
        $(".navigation-menu-bar").css("display", "block");
      });
    }
  });
  let isReloaded;
  $(window).resize(() => {
    
    if ($(window).width() <= "768") {
      $("header nav .navigation-menu-bar ").css("display", "flex");
      isReloaded=true;
    }
    if($(window).width() > "768" && (isReloaded==true)){
        window.location.reload();
        isReloaded=false;
    }

  })

$('.your-class').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  speed: 300,
  adaptiveHeight: false,
  variableWidth: false,
  responsive: [
   
    {

      breakpoint: 768,
      settings: 'unslick'
    }
  ]
});
});
