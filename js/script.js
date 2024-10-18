const swiper = new Swiper('.sample-slider', {
  loop: true,                         //loop
  autoplay: {                         //autoplay
    delay: 4000,  
    disableOnInteraction: false,
  },       
  effect: 'coverflow',         // apply fade effect
  //   fadeEffect: {           
  //     crossFade: true     // resolve the overlapping of the slides
  //   }
  // ,
})

const swiperSliderMovil = new Swiper('.sample-slider-movil', {
  loop: true,                         
  autoplay: {                         
    delay: 4000,  
    disableOnInteraction: false,
  },       
  effect: 'coverflow',           
  //   fadeEffect: {           
  //     crossFade: true     
  //   }
  // ,
})

const swiperVideos = new Swiper('.videos-slider', {
  loop: true,                         //loop
  spaceBetween: 30,
  effect: 'coverflow',         // apply fade effect
  //   fadeEffect: {           
  //     crossFade: true     // resolve the overlapping of the slides
  //   }
  // ,
  navigation: {                       //navigation(arrow)
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})


const swiper1 = new Swiper('.sample-slider-1', {
  loop: true, 
  spaceBetween: 30,                        //loop
  autoplay: {                         //autoplay
    delay: 2000,  
    disableOnInteraction: false,
  },   
  pagination: {                       //pagination(dots)
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  },
  navigation: {                       //navigation(arrows)
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
})


const swiper2 = new Swiper('.consultorio', {
  spaceBetween: 30,
  loop: true,                         //loop
  autoplay: {                         //autoplay
    delay: 2000,  
    disableOnInteraction: false,
  },   
  // Responsive breakpoints
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

const bg = document.getElementById('header')
window.onscroll = function() {
  const y = window.scrollY
  console.log(y)
  if (y>=0) {
    bg.classList.add('header-blanco')
  } 
  if (y==0) {
    bg.classList.remove('header-blanco')
  }
}

const abrir = document.getElementById('open')
const menu = document.getElementById('menu')
abrir.addEventListener('click', function () {
  menu.classList.add('show-menu')
})
const cerrar = document.getElementById('close')
cerrar.addEventListener('click', function () {
  menu.classList.remove('show-menu')
})

const menucon = document.getElementById('menu-contacto')
const whats = document.getElementById('whats')
const tel = document.getElementById('tel')
menucon.addEventListener('click', function () {
  whats.classList.toggle('show-whats')
  tel.classList.toggle('show-tel')
})

const links = document.querySelectorAll('.menu-movil')
links.forEach(element => {
  element.addEventListener('click', () => {
    menu.classList.remove('show-menu')
  })
})