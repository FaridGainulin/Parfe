function initSwiperFinances() {
  const swiper = new Swiper('.swiper-simple', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.simple-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    // loop: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

function initSwiperAbout() {
  const swiper = new Swiper('.swiper-medium', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.medium-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    // loop: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      1024: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

function initSwiperBig() {
  const swiper = new Swiper('.swiper-large', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.large-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    // loop: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      1200: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

$(document).ready(function () {
  initSwiperFinances()
  initSwiperAbout()
  initSwiperBig()
})
