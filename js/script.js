$('.js_slide').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplaySpeed: 5000,
  arrows: false,
  // dotsClass: "slide-dots-orijin",
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

$(window).on("load", function() {
  $(".mainView_slide").attr("data-view", "true");
  $(".mainCatch_img").attr("data-view", "true");
  $(".mainCatch_p").attr("data-view", "true");
  $(".headerMenu_btn").attr("data-view", "true");
  // console.log($(".mainView_slide").data("view"));
});


const modalBtn = document.querySelectorAll('.btn');
const modalMask = document.querySelector('.modal-mask');
const modal = document.querySelector('.modal-inner');
const content = document.querySelector('.modal-text');
const closeBtns = document.querySelectorAll('.close-modal');
console.log(closeBtns);

modalBtn.forEach(function(btn) {
  btn.addEventListener('click', function() {
    modalMask.classList.add('active');
    modal.classList.add('active');
    let inner = btn.getAttribute('data-model');
    console.log(inner);
    let target = document.querySelector(`div[data-model=${inner}]`);
    content.innerHTML = target.innerHTML;
  });
});

closeBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    modalMask.classList.remove('active');
    modal.classList.remove('active');
    content.textContent = "";
    console.log('bbb');
  });
});

function scrollCheck() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const element = document.querySelector('#top-btn');
  const checkPoint = 250;

  if(scrollTop > checkPoint){
    element.style.opacity = 1;
    element.style.visibility = "visible";
  }
}

window.addEventListener('scroll', scrollCheck);

$('a[href^="#"]').click(function () {
  const speed = 700;
  const href = $(this).attr('href');
  let $target;
  if (href == '#') {
    $target = $('html');
  }
  else {
    $target = $(href);
  }
  const position = $target.offset().top;
  $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
  return false;
});

const menuBtn = document.querySelector('.headerMenu_btn');

menuBtn.addEventListener('click', function() {
  const nav = document.querySelector('.headerMenu_nav');
  if(menuBtn.getAttribute('click-state') === "false" ){
    menuBtn.setAttribute('click-state', true);
    nav.style.opacity = 1;
    nav.style.visibility = "visible";
  }else{
    menuBtn.setAttribute('click-state', "false");
    nav.style.opacity = 0;
    nav.style.visibility = "hidden";
  }

})