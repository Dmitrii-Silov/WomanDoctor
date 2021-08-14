// /////Burger menu/////////////


let burger = document.querySelector('.header__burger');
let navlist = document.querySelector('nav');
let bodyblock = document.querySelector('body');

burger.onclick = function(){
	burger.classList.toggle('active');
	navlist.classList.toggle('active');
	bodyblock.classList.toggle('block');
}

/////Burger menu//////////////
// 
//функция определения поддержки webp
function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
   callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   
   testWebP(function (support) {
   
   if (support == true) {
   document.querySelector('body').classList.add('webp');
   }else{
   document.querySelector('body').classList.add('no-webp');
   }
   });
   //функция определения поддержки webp
// 
//////IBG///////////////////

   function ibg(){

      let ibg=document.querySelectorAll(".ibg");
      for (var i = 0; i < ibg.length; i++) {
      if(ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
      }
      }
      }
      
      ibg();
   
/////IBG///////////////////
// ///////SWIPER-SET1/////////////////////////////////////

let swiper1 = new Swiper('.swiper1', {
   // slidesPerView: 4,
  //  spaceBetween: 30,
   // slidesPerGroup: 4,
   loop: true,
   
  //  loopFillGroupWithBlank: true,
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   autoplay: {
    delay: 5000,
  },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   // Responsive breakpoints
  //  breakpoints: {
  //    // when window width is >= 1024px
  //    320: {
  //      slidesPerView: 2,
  //      spaceBetween: 5,
  //      slidesPerGroup: 2,
  //    },
  //    375: {
  //      slidesPerView: 2,
  //      spaceBetween: 5,
  //      slidesPerGroup: 2,
  //    },
  //    425: {
  //      slidesPerView: 3,
  //      spaceBetween: 5,
  //      slidesPerGroup: 3,
  //    },
  //    768: {
  //      slidesPerView: 4,
  //      spaceBetween: 10,
  //      slidesPerGroup: 4,
  //    },
  //    1025: {
  //      slidesPerView: 3,
  //      spaceBetween: 15,
  //      slidesPerGroup: 3,
  //    },
  //    1440: {
  //      slidesPerView: 4,
  //      spaceBetween: 20,
  //      slidesPerGroup: 4,
  //    },
  //  }
 });

 ///////SWIPER-SET1/////////////////////////////////////

 ///////SWIPER-SET2/////////////////////////////////////

let swiper2 = new Swiper('.swiper2', {
  // slidesPerView: 4,
 //  spaceBetween: 30,
  // slidesPerGroup: 4,
  loop: true,
  
 //  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
   delay: 5000,
 },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
 //  breakpoints: {
 //    // when window width is >= 1024px
 //    320: {
 //      slidesPerView: 2,
 //      spaceBetween: 5,
 //      slidesPerGroup: 2,
 //    },
 //    375: {
 //      slidesPerView: 2,
 //      spaceBetween: 5,
 //      slidesPerGroup: 2,
 //    },
 //    425: {
 //      slidesPerView: 3,
 //      spaceBetween: 5,
 //      slidesPerGroup: 3,
 //    },
 //    768: {
 //      slidesPerView: 4,
 //      spaceBetween: 10,
 //      slidesPerGroup: 4,
 //    },
 //    1025: {
 //      slidesPerView: 3,
 //      spaceBetween: 15,
 //      slidesPerGroup: 3,
 //    },
 //    1440: {
 //      slidesPerView: 4,
 //      spaceBetween: 20,
 //      slidesPerGroup: 4,
 //    },
 //  }
});

///////SWIPER-SET2/////////////////////////////////////




