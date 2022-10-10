                              /*SLIDER WITH TIMER*/
  const swiper = new Swiper('.expert-opinions__swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'slide' ,
    speed: 900,  
    autoplay: {
      delay: 2000,  
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });


                                 /*BURGER*/
 let burgerBtn = document.getElementById('burger-btn');
 let burgerBtnTwo = document.getElementById('burger-btn-2');
 let burgerMenu = document.getElementById('open-burger-menu');

  burgerBtn.addEventListener('click', ()=> {
  burgerMenu.classList.toggle('no-active');
  burgerBtn.classList.add('no-active');
  burgerBtnTwo.classList.remove('no-active');
 });

  burgerBtnTwo.addEventListener('click', ()=> {
  burgerMenu.classList.toggle('no-active');
  burgerBtnTwo.classList.add('no-active');
  burgerBtn.classList.remove('no-active');
 });


                                          /*TOOLTIP*/
 tippy('.more-info__btn', {
  content: 'Здесь будет информация',
  theme: 'tooltip',
});



                              /*HERO-SLIDER*/
let heroNextBtn = document.querySelector('.hero__btn-next');
let heroPrevBtn = document.querySelector('.hero__btn-prev');
let imgs = document.querySelectorAll('.hero__img');

let count = 1;
heroNextBtn.addEventListener('click', ()=> {
  count++;
  if(count>2) {
    count=2;
  } 
  for (let i=0; i<imgs.length; i++) {
    imgs[i].classList.remove('main-drug');
    imgs[i].classList.remove('yes');
    imgs[i].classList.add('no');
    imgs[count].classList.add('main-drug');
    imgs[count].classList.add('yes');
  }
});

heroPrevBtn.addEventListener('click', ()=> {
  count--;
  if(count<0) {
    count=0;
  } 
  for (let i=0; i<imgs.length; i++) {
    if(count<0) break;
    imgs[i].classList.remove('main-drug');
    imgs[i].classList.remove('yes');
    imgs[i].classList.add('no');
    imgs[count].classList.add('main-drug');
    imgs[count].classList.add('yes');
  }
});


                            /*SLIDER WITH VIDEOS*/
let videoPrevBtn = document.querySelector('.production__prev-btn');
let videoOne = document.querySelector('.video-1');
let videoTwo = document.querySelector('.video-2');
let videoNextBtn = document.querySelector('.production__next-btn');
let videosAll = document.querySelectorAll('.video');
let count2 = 1;

let move = function () {
  count2++;
  if(count2 > 1) {
    count2 = 1;
  }
  for(let i=0; i<videosAll.length; i++) {
    if(count2>1) break;
    videosAll[i].classList.remove('big-img');
    videosAll[count2].classList.add('big-img');
    
    videoNextBtn.style.opacity = '0.5';
    videoPrevBtn.style.opacity = '1';
  }
};

let moveBack = function () {
count2--;
  if(count2<0) {
    count2=0;
  }
  for(let i=0; i<videosAll.length; i++) {
    if(count2<0) break;
    videosAll[i].classList.remove('big-img');
    videosAll[count2].classList.add('big-img');
    videoPrevBtn.style.opacity = '0.5';
    videoNextBtn.style.opacity = '1';
  }};

videoNextBtn.addEventListener('click', move);
videoOne.addEventListener('click', moveBack);
videoPrevBtn.addEventListener('click', moveBack);
videoTwo.addEventListener('click', move);




                                      /*SEARCH-BLOCK*/
let searchBtn = document.querySelector('.header__btn__search');
let searchBlock = document.querySelector('.header__search-block');
searchBtn.addEventListener('click', function () {
  searchBlock.classList.toggle('active');
});







