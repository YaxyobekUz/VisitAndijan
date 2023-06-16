// lang list 
const elLangBtn = document.querySelector('.lang-btn');
const elLangListSecondChild = document.querySelector('.lang-list-last-child');
const elArrowRotate = document.querySelector('.lang-list-arrow-icon');

elLangBtn.addEventListener('click', function () {
    elLangListSecondChild.classList.toggle('bring-down');
    elArrowRotate.classList.toggle('rotate0deg');
    elArrowRotate.classList.toggle('rotate180deg');
});

// travel list 
const elTravelListBtn = document.querySelector('.travel-list-btn');
const elTravelList = document.querySelector('.travel-list');
const elTravelBtnArrowRotate = document.querySelector('.travel-list-arrow-icon');

elTravelListBtn.addEventListener('click', function () {
    elTravelList.classList.toggle('bring-down');
    elTravelList.classList.toggle('display-none');
    elTravelBtnArrowRotate.classList.toggle('rotate0deg');
    elTravelBtnArrowRotate.classList.toggle('rotate180deg');
});

// night and light mode 
const elNightModeBtn = document.querySelector('.night-mode-btn');

elNightModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('night-mode');
})