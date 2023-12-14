$('.js_slide').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplaySpeed: 5000,
  arrows: false,
});

$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  const adjust = windowHeight * 0.2;
  $('.js-fadeIn').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + adjust) {
      $(this).addClass('fade-in');
    }
  });
});