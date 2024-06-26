//sub-meni 아이콘

const badgeEl = document.querySelector('header .badge');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function (){
  console.log(window.scrollY);
  if (window.scrollY > 500){
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기
    gsap.to(toTopEl, .2,{
      x: 0
    });
    } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2,{
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간)

toTopEl.addEventListener('click',function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

// 천천히 나타나기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEls, index){
  gsap.to(fadeEls, 1, {
    opacity:1,
    delay:(index + 1)*.7
  });
});
// new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});


// 가로 슬라이드
new Swiper('.promotion .swiper', {
  slidesPerView: 3, // Number of slides per view
  spaceBetween: 10, // Space between slides
  centeredSlides: true, // Center the first slide
  loop: true,// Enable loop mode
  //autoplay:{
  //  delay:5000
  //}
  pagination:{
    el: '.promotion .swiper-pagination', //페이지 번호 요소 제어
    clickable: true
  },
  navigation:{
    preEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper', {
  direction:'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

//페이지 숨기기
const promotionEl = document .querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    promotionEl.classList.add('hide');
  } else{
    promotionEl.classList.remove('hide');
  }
})

// 애니메이션 js
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size){
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, // 선택자
    random(1.5, 2.5),// 애니메이션 동작 시간
    { //옵션
    y: size,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

//SCROLL MASIC
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 요소를 감시할 대상을 지정합니다.
    triggerHook: 0.8 // 스크롤을 어느 정도 도달했을 때 트리거할지를 지정합니다. (0부터 1까지의 값)
  })
  .setClassToggle(spyEl, 'show') // 특정 클래스를 토글합니다.
  .addTo(new ScrollMagic.Controller());
});

