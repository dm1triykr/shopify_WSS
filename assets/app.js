'use strict';

$(document).ready(function () {
  $('.categories-slider-mobile__content').slick({
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 3.5,
    variableWidth: true
  });
  $('.main-slider').slick({
    dots: true
  });
  $('.bestsellers-slider__wrapper').slick({
    dots: true,
    centerMode: true,
    centerPadding: '131px',
    slidesToShow: 5,
    arrows: false,
    responsive: [{
      breakpoint: 1441,
      settings: {
        centerPadding: '227px',
        slidesToShow: 3
      }
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.3,
        centerMode: false,
        infinite: false //currentSlide: 2,
        //centerPadding: '46px'

      }
    }, {
      breakpoint: 751,
      settings: {
        slidesToShow: 1,
        centerPadding: '0px'
      }
    }]
  });
  $('.favorite-books-slider__wrapper').slick({
    dots: false,
    arrows: true,
    slidesToShow: 2,
    responsive: [{
      breakpoint: 751,
      settings: {
        slidesToShow: 1.07,
        infinite: false
      }
    }]
  });
  $('.meet-with-team-slider__tabs').slick({
    dots: false,
    arrow: false,
    slidesToShow: 3,
    asNavFor: '.meet-with-team-slider__slides',
    focusOnSelect: true
  });
  $('.meet-with-team-slider__wrapper').slick({
    customPaging: function (slider, i) {
      var slidernav = $(slider.$slides[i]).data('slidernav');
      return '<a>' + slidernav + '</a>';
    },
    dots: true,
    //speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  $('.categories-slider__slides').slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    infinite: false,
    // variableWidth: true,
    // centerMode: true,
    responsive: [{
      breakpoint: 1441,
      settings: {
        slidesToShow: 4.22,
        variableWidth: true
      }
    }, {
      breakpoint: 751,
      settings: {
        slidesToShow: 3.5,
        variableWidth: true
      }
    }]
  });
  $('.retailer-stores-slider__slides').slick({
    dots: true,
    arrows: false
  });
  $('.content-follow-us__slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 6,
    responsive: [{
      breakpoint: 1200,
      settings: {
        centerMode: true,
        slidesToShow: 3,
        infinite: false,
        initialSlide: 1,
        centerPadding: "25px"
      }
    }, {
      breakpoint: 751,
      settings: {
        slidesToShow: 1.27,
        centerMode: false,
        infinite: false
      }
    }]
  });
  $('.announcement-bar__wrapper').slick({
    arrows: true,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 751,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  var res = $(window);

  if (res.innerWidth() <= 639) {
    $('.advantages__content:not(.slick-initialized)').slick({
      slidesToShow: 1,
      dots: true,
      arrows: false,
      centerMode: true,
      centerPadding: '15px'
    });
  }

  $(window).resize(function () {
    var res = $(window);

    if (res.innerWidth() <= 639) {
      $('.advantages__content:not(.slick-initialized)').slick({
        slidesToShow: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '15px'
      });
    } else {
      $('.advantages__content').slick('unslick');
    }
  });
});
$('.burger-btn').click(function (e) {
  e.preventDefault();
  var target = $(this).toggleClass('burger-btn_active').attr('data-target');
  $(target).toggleClass('active');
});
jQuery('.burger-menu__item .icon-arrow').click(function (e) {
  e.preventDefault();
  jQuery(this).parent('.burger-menu__link').next('.burger-menu__sub-menu').slideToggle();
});
//# sourceMappingURL=app.js.map
