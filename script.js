// header scroll effect 
  function removeClass(element, className) {1
    if (element.classList) {
      element.classList.remove(className);
    } else {
      element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop >= 20) {
        header.classList.add('with-effect');
        document.body.classList.add('a-color');
      } else {
        header.classList.remove('with-effect');
        document.body.classList.remove('a-color');
      }
    });
  });

// lang list 
// const elLangBtn = document.querySelector('.lang-btn');
// const elLangListSecondChild = document.querySelector('.lang-list-last-child');
// const elArrowRotate = document.querySelector('.lang-list-arrow-icon');

// elLangBtn.addEventListener('click', function () {
//     elLangListSecondChild.classList.toggle('bring-down');
//     elArrowRotate.classList.toggle('rotate0deg');
//     elArrowRotate.classList.toggle('rotate180deg');
// });

// travel list 
const elTravelListBtn = document.querySelector('.travel-list-btn');
const elTravelList = document.querySelector('.travel-list');
const elTravelBtnArrowRotate = document.querySelector('.travel-list-arrow-icon');

elTravelListBtn.addEventListener('click', function () {
    elTravelList.classList.toggle('travel-list-child-bring-down');
    elTravelList.classList.toggle('display-none');
    elTravelBtnArrowRotate.classList.toggle('rotate0deg');
    elTravelBtnArrowRotate.classList.toggle('rotate180deg');
});

// travel list 2 
const elTravelListBtn2 = document.querySelector('.travel-list-btn-2');
const elTravelList2 = document.querySelector('.travel-list-2');
const elTravelBtnArrowRotate2 = document.querySelector('.travel-list-arrow-icon-2');

elTravelListBtn2.addEventListener('click', function () {
    elTravelList2.classList.toggle('travel-list-bring-down');
    elTravelBtnArrowRotate2.classList.toggle('travel-list-child-bring-down-2');
});

// night and light mode 
const elNightModeBtn = document.querySelector('.night-mode-btn');

elNightModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('night-mode');
})

// hamburger menu's night and light mode 
const elNightModeBtn2 = document.querySelector('.night-mode-btn-2');

elNightModeBtn2.addEventListener('click', function () {
    document.body.classList.toggle('night-mode');
})

// hamburger menu 
const elBlur = document.querySelector('.blur');
const elHamburgerMenuBtn = document.querySelector('.hamburger-menu-btn');
const elHamburgerMenu = document.querySelector('.hamburger-menu');
const elMenuBtnAnimation = document.querySelector('.hamburger-menu-btn-child');

elHamburgerMenuBtn.addEventListener('click', function () {
  elMenuBtnAnimation.classList.toggle('btn-animation');
  elHamburgerMenu.classList.toggle('menu-animation');
  document.body.classList.toggle('overflow-hidden')
})
