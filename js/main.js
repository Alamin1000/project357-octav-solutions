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
  $(".tools-list-slider-active").owlCarousel({
    loop: true,
    margin: 48,
    responsiveClass: true,
    autoWidth: true,
    center: true,
    nav: false,
    dots: false,
    autoplay: true,
    navText: [
      '<i class="far fa-arrow-left"></i>',
      '<i class="far fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        margin: 20,
      },
      600: {
        margin: 32,
      },
      1000: {
        margin: 48,
      },
    },
  });
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
  let tb_tp_nav_slider = $(".tb-top-nav_slider-active");
  // console.log(tb_tp_nav_slider);
  tb_tp_nav_slider.owlCarousel({
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
  tb_tp_nav_slider.on("changed.owl.carousel", function (e) {
    setTimeout(function () {
      let all = tb_tp_nav_slider.find(".owl-item.center .tb-top-nav-item");
      all.removeClass("active");
      let center = tb_tp_nav_slider.find(".owl-item.center .tb-top-nav-item");
      center.tab("show");
    }, 1);
  });
  // let yu = $("#sdfs");
  // console.log(yu);
  // setTimeout(function () {
  //   yu.tab("show");
  // }, 1);

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

  {
    function myFunction(x) {
      if (x.matches) {
        // If media query matches
        $(".service-uses-all-active").owlCarousel({
          loop: true,
          margin: 10,
          responsiveClass: true,
          center: true,
          nav: true,
          items: 1,
          // autoHeight: true,
          navText: [
            '<i class="far fa-arrow-left"></i>',
            '<i class="far fa-arrow-right"></i>',
          ],
        });
      } else {
        //
      }
    }
    var x = window.matchMedia("(max-width: 991px)");
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction); // Attach listener function on state changes
  }

  $(".nice-select").niceSelect();

  // fullPage
  $("[data-aos]").each(function () {
    $(this).addClass("aos-init");
  });
  new fullpage("#fullpage", {
    // sectionsColor: ["yellow", "orange", "#C0C0C0", "#ADD8E6"],
    anchors: [
      "page1",
      "page2",
      "page3",
      "page4",
      "page5",
      "page6",
      "page7",
      "page8",
    ],
    navigationTooltips: ["fullPage", "Open", "Easy", "Touch"],
    css3: true,
    scrollingSpeed: 1000,
    // navigation: true,
    slidesNavigation: true,
    responsiveHeight: 330,
    responsiveWidth: 992,
    dragAndMove: true,
    dragAndMoveKey:
      "YkdZV3gyWVhKdmRISnBaMjh1WTI5dEE3X09keFpISmhaMEZ1WkUxdmRtVT0xbmw=",
    controlArrows: false,
    // Get your license at https://alvarotrigo.com/fullPage/pricing/
    // licenseKey: "YOUR LICENSE KEY HERE ",
    onLeave: function () {
      $(".section [data-aos]").each(function () {
        $(this).removeClass("aos-animate");
      });
    },
    onSlideLeave: function () {
      $(".slide [data-aos]").each(function () {
        $(this).removeClass("aos-animate");
      });
    },
    afterSlideLoad: function () {
      $(".slide.active [data-aos]").each(function () {
        $(this).addClass("aos-animate");
      });
    },
    afterLoad: function () {
      $(".section.active [data-aos]").each(function () {
        $(this).addClass("aos-animate");
      });
    },
  });

  // tbr_nav_ul
  {
    function myFunction(x) {
      if (x.matches) {
        // If media query matches
      } else {
        let allNav = document.querySelectorAll(".tbr_nav .nav");
        allNav.forEach((tbr_nav_ul) => {
          // let tbr_nav_ul = document.getElementById("tbr_nav_ul");
          let nav_options = tbr_nav_ul.querySelectorAll("li a");
          let nav_options_count = nav_options.length;
          let i = 1;
          setInterval(function () {
            nav_options[i].click();
            if (i + 1 == nav_options_count) {
              i = 0;
            } else {
              i++;
            }
          }, 5000);
        });
      }
    }
    var x = window.matchMedia("(max-width: 991px)");
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction); // Attach listener function on state changes
  }
  // tbr_nav_ul_mobile
  {
    let all_select = document.querySelectorAll(".tbr_nav-select");
    all_select.forEach((select) => {
      $(document).on("change", select, function () {
        let a = $('[data-bs-target="' + select.value + '"]');
        a.tab("show");
      });
    });
  }
})(jQuery);

$(document).ready(function () {
  {
    // let nav_item = document.querySelectorAll(".tb-top-nav-item");
    // nav_item.forEach((i) => {
    //   let x = i;
    //   x.addEventListener("click", function (event) {
    //     let p = event.target;
    //     setTimeout(function () {
    //       console.log(p);
    //       p.tab("show");
    //     }, 1);
    //   });
    // });
  }
});
