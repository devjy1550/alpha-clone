window.onload = function () {
  new Swiper('.header-swp', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.hdsw-next',
      prevEl: '.hdsw-prev'
    },
    pagination: {
      el: '.hd-swiper-pg',
      type: 'bullets'
    }
  })


  //탭메뉴스와이퍼 모음
  new Swiper('.OpenP-sw', {
    slidesPerView: "2.5",
    spaceBetween: 30,
    resistance: true,
    resistanceRatio: 0.7,
    navigation: {
      prevEl: '.OPPREV',
      nextEl: '.OPNEXT',
      disabledClass: 'faint',
    }
  })


  new Swiper('.GrowP-sw', {
    slidesPerView: "2.5",
    spaceBetween: 50,
    resistance: true,
    resistanceRatio: 0.7,
    navigation: {
      prevEl: '.GPPREV',
      nextEl: '.GPNEXT',
      disabledClass: 'faint',
    }
  })

  new Swiper('.CommuP-sw', {
    slidesPerView: "2.5",
    spaceBetween: 50,
    resistance: true,
    resistanceRatio: 0.7,
    navigation: {
      prevEl: '.CPPREV',
      nextEl: '.CPNEXT',
      disabledClass: 'faint',
    }
  })


  new Swiper('.TogetherP-sw', {
    slidesPerView: "2.5",
    spaceBetween: 50,
    resistance: true,
    resistanceRatio: 0,
  })

let header = $('.header');



}



$(document).ready(function () {
  // 탭메뉴스와이퍼
  let swTabBt = $('.tabBt-set>button>span');
  let TabSwiperSet = $('.swiperSet>li');
  // 첫번째껀 일단 보이기
  TabSwiperSet.eq(0).css('visibility', 'visible');
  // 탭버튼 활성화
  // $.each(swTabBtSet, function () {
  //   $(this).click(function () {})
  // });
  //탭버튼 - 메뉴연결
  $.each(swTabBt, function (index) {
    $(this).click(function () {
      TabSwiperSet.css('visibility', 'hidden');
      TabSwiperSet.eq(index).css('visibility', 'visible');
    })
  })


  // 메인메뉴
  let GNBMainMenu = $('.gnb-mainmenu>li');
  let GNBSubMenuSet = $('.gnb-submenu');

  $.each(GNBMainMenu, function (index) {
    $(this).mouseenter(function () {
      GNBSubMenuSet.hide();
      GNBSubMenuSet.eq(index).show();
    })
    $(this).mouseleave(function () {
      GNBSubMenuSet.hide();
    })
  })


  // 푸터 메뉴
  let footerFs = $('.footer-fmsite');
  let footerFsSp = $('.footer-fmsite>span');
  let fsPop = $('.footer-fmsite>ul');

  footerFs.click(function () {
    if (fsPop.hasClass('toggle')) {
      fsPop.removeClass('toggle')
      footerFsSp.removeClass('opened');
    } else {
      fsPop.addClass('toggle');
      footerFsSp.addClass('opened');
    }
  })
})