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

// night and light mode 
const elNightModeBtn = document.querySelector('.night-mode-btn');

elNightModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('night-mode');
})