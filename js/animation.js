// animations.js - Enhanced jQuery animations for Mokhtarreon website

$(document).ready(function () {
  // Add loading animation with slight delay for better effect
  setTimeout(function () {
    $("body").addClass("loaded");
  }, 300);

  // Initialize AOS (Animate On Scroll) with enhanced settings
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: false,
    mirror: true,
    offset: 50,
  });

  // Custom animations for specific elements

  // Hero section animation with enhanced effects
  $(".sec1 .right h1").addClass(
    "animate__animated animate__fadeInRight animate__delay-0.5s",
  );
  $(".sec1 .right ul li").each(function (index) {
    $(this)
      .addClass("animate__animated animate__fadeInRight")
      .css("animation-delay", 0.7 + index * 0.2 + "s");
  });
  $(".sec1 .right .btns").addClass(
    "animate__animated animate__fadeInUp animate__delay-1.5s",
  );
  $(".sec1 .left img").addClass(
    "animate__animated animate__fadeInLeft animate__delay-0.5s",
  );

  // Smooth scroll for navigation links
  $("header nav ul li a, .sidebar ul li a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;

      // Close sidebar if open
      if ($("#sidebar").hasClass("active")) {
        $("#sidebar").removeClass("active");
        $("body").removeClass("sidebar-active");
      }

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70,
        },
        800,
        "easeInOutExpo",
        function () {
          window.location.hash = hash;
        },
      );
    }
  });

  // Add easing functions if not available
  $.extend($.easing, {
    easeInOutExpo: function (x, t, b, c, d) {
      if (t == 0) return b;
      if (t == d) return b + c;
      if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
      return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
    },
  });

  // Smooth scroll for navigation links
  $("header nav ul li a, .sidebar ul li a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;

      // Close sidebar if open
      if ($("#sidebar").hasClass("active")) {
        $("#sidebar").removeClass("active");
        $("body").removeClass("sidebar-active");
      }

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70,
        },
        800,
        "easeInOutExpo",
        function () {
          window.location.hash = hash;
        },
      );
    }
  });

  // Add easing functions if not available
  $.extend($.easing, {
    easeInOutExpo: function (x, t, b, c, d) {
      if (t == 0) return b;
      if (t == d) return b + c;
      if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
      return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
    },
  });

  // Enhanced scroll animations using jQuery
  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();

    // Animate elements when they come into view with staggered effect
    $(".card").each(function (index) {
      var elementPosition = $(this).offset().top;

      if (scrollPosition > elementPosition - $(window).height() * 0.85) {
        setTimeout(
          function (element) {
            $(element).addClass("visible");
          },
          index * 100,
          this,
        );
      }
    });

    // Animate icons in the "why" section with staggered effect
    $(".icon-wrapper").each(function (index) {
      var elementPosition = $(this).offset().top;

      if (scrollPosition > elementPosition - $(window).height() * 0.9) {
        setTimeout(
          function (element) {
            $(element).addClass("pulse");
          },
          index * 150,
          this,
        );
      }
    });

    // Animate section titles
    $(".header-title, .title").each(function () {
      var elementPosition = $(this).offset().top;

      if (scrollPosition > elementPosition - $(window).height() * 0.85) {
        $(this).addClass("visible");
      }
    });

    // Parallax effect for hero image
    var scrolled = $(window).scrollTop();
    $(".sec1 .left img").css(
      "transform",
      "translateY(" + scrolled * 0.1 + "px)",
    );
  });

  // Add hover animations for buttons
  $(".btn1, .btn2, .i_btn button, .sidebar-btn").hover(
    function () {
      $(this).css("transform", "translateY(-3px)");
    },
    function () {
      $(this).css("transform", "translateY(0)");
    },
  );

  // Trigger scroll once to animate elements that are already in view
  $(window).trigger("scroll");
});
