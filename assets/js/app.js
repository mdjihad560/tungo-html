"use strict";

(function ($) {
  "use strict";

  /*--------------------------------------------------------------
   [Table of contents]
  
  TUNGO PRELOADER JS INIT
  TUNGO STICKY MENU JS INIT
  TUNGO HEADER SEARCH JS INIT
  TUNGO MENU SIDEBAR JS INIT
  TUNGO HERO SLIDER INIT
  TUNGO HERO SLIDER2 INIT
  TUNGO INSTAGRAM SLIDER INIT
  TUNGO HERO THUMB SLIDER INIT
  TUNGO GALLERY SLIDER INIT
  TUNGO PROPERTIES SLIDER INIT
  TUNGO PROPERTIES SLIDER2 INIT
  TUNGO PROPERTIES SLIDER3 INIT
  TUNGO TESTIMONIAL SLIDER INIT
  TUNGO TESTIMONIAL SLIDER2 INIT
  TUNGO TESTIMONIAL SLIDER3 INIT
  TUNGO BRAND SLIDER INIT
  TUNGO GALLERY SLIDER2 INIT
  TUNGO COUNTER JS INIT
  TUNGO MAGNIFIC POPUP VIDEO JS INIT
  TUNGO MAGNIFIC POPUP IMAGE JS INIT
  TUNGO PORTFOLIO MASONAY FILTER JS
  TUNGO MAP JS
  TUNGO WOW JS
   
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  $(function () {
    /*--------------------------------------------------------------
    TUNGO PRELOADER JS INIT
    --------------------------------------------------------------*/
    $(".tungo-preloader-wrap").fadeOut(500);

    /*--------------------------------------------------------------
    TUNGO STICKY MENU JS INIT
    --------------------------------------------------------------*/
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
    });

    /*--------------------------------------------------------------
    TUNGO HEADER SEARCH JS INIT
    --------------------------------------------------------------*/
    $(".tungo-header-search, .tungo-header-search-close, .search-overlay").click(function () {
      $(".tungo-header-search-section, .search-overlay").toggleClass("open");
    });

    /*--------------------------------------------------------------
    TUNGO MENU SIDEBAR JS INIT
    --------------------------------------------------------------*/
    $(".tungo-berger-icon").on("click", function (event) {
      $(".tungo-sidemenu-column, .offcanvas-overlay").addClass("active");
      event.preventDefault(e);
    });
    $(".tungo-sidemenu-close, .offcanvas-overlay").on("click", function () {
      $(".tungo-sidemenu-column, .offcanvas-overlay").removeClass("active");
    });

    /*--------------------------------------------------------------
    TUNGO HERO SLIDER INIT
    --------------------------------------------------------------*/
    var hero_slider = $('.tungo-hero-slider-init');
    if (hero_slider.is_exist()) {
      hero_slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        speed: 800,
        lazyLoad: 'progressive',
        prevArrow: '<button class="slide-arrow tungo-hero-next"><img src="assets/images/icon/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slide-arrow tungo-hero-prev"><img src="assets/images/icon/arrow-right.svg" alt=""></button>'
      }).slickAnimation();
    }

    /*--------------------------------------------------------------
    TUNGO HERO SLIDER2 INIT
    --------------------------------------------------------------*/
    var hero_slider2 = $('.tungo-hero-slider-init2');
    if (hero_slider2.is_exist()) {
      hero_slider2.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        speed: 800,
        lazyLoad: 'progressive'
      }).slickAnimation();
    }

    /*--------------------------------------------------------------
    TUNGO INSTAGRAM SLIDER INIT
    --------------------------------------------------------------*/
    var tungo_insta_slider = $('.tungo-insta-slider-init');
    if (tungo_insta_slider.is_exist()) {
      tungo_insta_slider.slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: false,
        responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    TUNGO HERO THUMB SLIDER INIT
    --------------------------------------------------------------*/
    var hero_thumb_skider = $('.tungo-hero-thumb-slider-init');
    if (hero_thumb_skider.is_exist()) {
      hero_thumb_skider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 1500,
        autoplay: true
      });
    }

    /*--------------------------------------------------------------
    TUNGO GALLERY SLIDER INIT
    --------------------------------------------------------------*/
    var tungo_gallery_slider = $('.tungo-gallery-slider');
    if (tungo_gallery_slider.is_exist()) {
      tungo_gallery_slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: '<button class="slide-arrow tungo-gallery-next"><img src="assets/images/icon/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slide-arrow tungo-gallery-prev"><img src="assets/images/icon/arrow-right.svg" alt=""></button>',
        asNavFor: '.tungo-gallery-slider-nav'
      });
    }
    var tungo_gallery_slider_nav = $('.tungo-gallery-slider-nav');
    if (tungo_gallery_slider_nav.is_exist()) {
      tungo_gallery_slider_nav.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.tungo-gallery-slider',
        dots: false,
        infinite: true,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true
      });
    }

    /*--------------------------------------------------------------
    TUNGO PROPERTIES SLIDER INIT
    --------------------------------------------------------------*/
    var properties_slider = $('.tungo-properties-slider');
    if (properties_slider.is_exist()) {
      properties_slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        centerMode: true,
        centerPadding: '250px',
        prevArrow: '<button class="slide-arrow tungo-properties-next"><img src="assets/images/icon/arrow-left-black.svg" alt=""></button>',
        nextArrow: '<button class="slide-arrow tungo-properties-prev"><img src="assets/images/icon/arrow-right-black.svg" alt=""></button>',
        responsive: [{
          breakpoint: 1600,
          settings: {
            centerPadding: '150px'
          }
        }, {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            centerPadding: '150px'
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            centerPadding: '200px'
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerPadding: '100px'
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            centerPadding: '0px'
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    TUNGO PROPERTIES SLIDER2 INIT
    --------------------------------------------------------------*/
    var properties_slider2 = $('.tungo-properties-slider2');
    if (properties_slider2.is_exist()) {
      properties_slider2.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        centerMode: true,
        speed: 3000,
        centerPadding: '250px',
        responsive: [{
          breakpoint: 1600,
          settings: {
            centerPadding: '150px'
          }
        }, {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            centerPadding: '150px'
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            centerPadding: '200px'
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerPadding: '100px'
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            centerPadding: '0px'
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    TUNGO PROPERTIES SLIDER3 INIT
    --------------------------------------------------------------*/
    var properties_slider3 = $('.tungo-properties-slider3');
    if (properties_slider3.is_exist()) {
      properties_slider3.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '250px',
        responsive: [{
          breakpoint: 1600,
          settings: {
            centerPadding: '150px'
          }
        }, {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            centerPadding: '150px'
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            centerPadding: '200px'
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerPadding: '100px'
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            centerPadding: '0px'
          }
        }]
      });
    }
    var slider = jQuery(".tungo-properties-slider3");
    slider;
    slider.on("wheel", function (e) {
      e.preventDefault();
      if (e.originalEvent.deltaY < 0) {
        jQuery(this).slick("slickNext");
      } else {
        jQuery(this).slick("slickPrev");
      }
    });
    /*--------------------------------------------------------------
    TUNGO TESTIMONIAL SLIDER INIT
    --------------------------------------------------------------*/
    var testimonial_slider = $('.tungo-testimonial-slider');
    if (testimonial_slider.is_exist()) {
      testimonial_slider.slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '280px',
        responsive: [{
          breakpoint: 1600,
          settings: {
            centerPadding: '150px'
          }
        }, {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            centerPadding: '150px'
          }
        }, {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            centerPadding: '200px'
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerPadding: '100px'
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            centerPadding: '0px'
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    TUNGO TESTIMONIAL SLIDER2 INIT
    --------------------------------------------------------------*/
    var testimonail_slider2 = $('.tungo-testimonial-slider2');
    if (testimonail_slider2.is_exist()) {
      testimonail_slider2.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        speed: 1000,
        prevArrow: '<button class="slide-arrow tungo-testimonial-next"><img src="assets/images/icon/arrow-left-black.svg" alt=""></button>',
        nextArrow: '<button class="slide-arrow tungo-testimonial-prev"><img src="assets/images/icon/arrow-right-black.svg" alt=""></button>'
      });
    }

    /*--------------------------------------------------------------
    TUNGO TESTIMONIAL SLIDER3 INIT
    --------------------------------------------------------------*/
    var testimonail_slider3 = $('.tungo-testimonial-slider3');
    if (testimonail_slider3.is_exist()) {
      testimonail_slider3.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: false,
        speed: 1000
      });
    }

    /*--------------------------------------------------------------
    TUNGO BRAND SLIDER INIT
    --------------------------------------------------------------*/
    var tungo_brand_slider = $('.tungo-brand-slider');
    if (tungo_brand_slider.is_exist()) {
      tungo_brand_slider.slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear',
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    TUNGO GALLERY SLIDER2 INIT
    --------------------------------------------------------------*/
    var tungo_gallery_slider2 = $('.tungo-gallery-slider2');
    if (tungo_gallery_slider2.is_exist()) {
      tungo_gallery_slider2.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: '250px',
        prevArrow: '<button class="slide-arrow tungo-gallery-next2"><img src="assets/images/icon/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slide-arrow tungo-gallery-prev2"><img src="assets/images/icon/arrow-right.svg" alt=""></button>',
        responsive: [{
          breakpoint: 1600,
          settings: {
            centerPadding: '150px'
          }
        }, {
          breakpoint: 1400,
          settings: {
            centerPadding: '150px'
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            centerPadding: '100px'
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerPadding: '50px'
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            centerPadding: '0px'
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    TUNGO COUNTER JS INIT
    --------------------------------------------------------------*/
    var tungo_counter = $('#tungo-counter');
    if (tungo_counter.is_exist()) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(tungo_counter).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.tungo-counter').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            }, {
              duration: 4000,
              easing: 'swing',
              step: function step() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function complete() {
                $this.text(this.countNum);
              }
            });
          });
          a = 1;
        }
      });
    }

    /*--------------------------------------------------------------
    TUNGO MAGNIFIC POPUP VIDEO JS INIT
    ------------------------------------------------------------*/
    var popup_youtube = $('.video-init');
    if (popup_youtube.is_exist()) {
      popup_youtube.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade'
      });
    }

    /*--------------------------------------------------------------
    TUNGO MAGNIFIC POPUP IMAGE JS INIT
    ------------------------------------------------------------*/

    var popup_thumb = $('.image-init');
    if (popup_thumb.is_exist()) {
      popup_thumb.magnificPopup({
        // delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          verticalFit: true,
          titleSrc: function titleSrc(item) {
            return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
          }
        },
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 300,
          // don't foget to change the duration also in CSS
          opener: function opener(element) {
            return element.find('img');
          }
        }
      });
    }
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  $(window).on("load", function () {
    /*--------------------------------------------------------------
    TUNGO PORTFOLIO MASONAY FILTER JS
    ------------------------------------------------------------*/
    var tungo_gallery_masonay = $('#tungo-portfolio-masonay');
    if (tungo_gallery_masonay.is_exist()) {
      var $container = $(tungo_gallery_masonay),
        colWidth = function colWidth() {
          var w = $container.width(),
            columnNum = 1,
            columnWidth = 0;
          if (w > 1200) {
            columnNum = 3;
          } else if (w > 900) {
            columnNum = 3;
          } else if (w > 600) {
            columnNum = 2;
          } else if (w > 450) {
            columnNum = 1;
          } else if (w > 385) {
            columnNum = 1;
          }
          columnWidth = Math.floor(w / columnNum);
          $container.find('.collection-grid-item').each(function () {
            var $item = $(this),
              multiplier_w = $item.attr('class').match(/collection-grid-item-w(\d)/),
              multiplier_h = $item.attr('class').match(/collection-grid-item-h(\d)/),
              width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
              height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
            $item.css({
              width: width
              // height: height
            });
          });
          return columnWidth;
        },
        isotope = function isotope() {
          $container.isotope({
            resizable: false,
            itemSelector: '.collection-grid-item',
            masonry: {
              columnWidth: colWidth(),
              gutterWidth: 0
            }
          });
        };
      isotope();
      $(window).resize(isotope);
      var $optionSets = $('.tungo-portfolio-menu .option-set'),
        $optionLinks = $optionSets.find('li');
      $optionLinks.click(function () {
        var $this = $(this);
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.active').removeClass('active');
        $this.addClass('active');

        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
          key = $optionSet.attr('data-option-key'),
          value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
          // changes in layout modes need extra logic
          changeLayoutMode($this, options);
        } else {
          // creativewise, apply new options
          $container.isotope(options);
        }
        return false;
      });
    }
  }); // End window LODE

  /*--------------------------------------------------------------
  TUNGO MAP JS
  ------------------------------------------------------------*/
  var google_map = $('#map');
  if (google_map.is_exist()) {
    var init = function init() {
      var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.6700, -73.9400),
        styles: [{
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f7f1df"
          }]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#d0e3b4"
          }]
        }, {
          "featureType": "landscape.natural.terrain",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.medical",
          "elementType": "geometry",
          "stylers": [{
            "color": "#fbd3da"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#bde6ab"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffe15f"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#efd151"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "black"
          }]
        }, {
          "featureType": "transit.station.airport",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#cfb2db"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#a2daf2"
          }]
        }]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        // icon: 'assets/images/all-img/contact/map.png',
        title: 'tungo'
      });
      var contentString = '<div id="content">' + '<div id="tpw">' + '<h3>tungo' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 280
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
        marker.setAnimation(null);
      }, 750); //time it takes for one bounce   

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
    };
    google.maps.event.addDomListener(window, 'load', init);
  }

  /*--------------------------------------------------------------
  TUNGO WOW JS
  ------------------------------------------------------------*/
  var wow = new WOW({
    mobile: false,
    // default
    tablet: false
  });
  wow.init();
})(jQuery);