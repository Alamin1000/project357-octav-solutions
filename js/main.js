(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  $('input[type="checkbox"]').closest("label").css("cursor", "pointer");
  $('input[type="radio"]').closest("label").css("cursor", "pointer");

  // owl-carousel
  $(".ns-slider-active").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoWidth: true,
    center: true,
    nav: true,
    navText: [
      '<i class="far fa-arrow-left"></i>',
      '<i class="far fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".tb-top-nav_slider").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoWidth: true,
    center: true,
    nav: true,
    navText: [
      '<i class="far fa-arrow-left"></i>',
      '<i class="far fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".pro-slider-active").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    center: true,
    nav: true,
    items: 1,
    animateIn: "fadeIn",
    // animateOut: "fadeOut",
    touchDrag: false,
    mouseDrag: false,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>',
    ],
  });
})(jQuery);

$(document).ready(function () {
  // nice-select
  $(".nice-select").niceSelect();

  // preloader
  $("#preloader").fadeOut(500);
});
