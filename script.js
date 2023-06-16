// lang list 
const elLangBtn = document.querySelector('.lang-btn');
const elLangListSecondChild = document.querySelector('.lang-list-last-child');
const elArrowRotate = document.querySelector('.lang-list-arrow-icon');

elLangBtn.addEventListener('click', function () {
    elLangListSecondChild.classList.toggle('bring-down');
    elArrowRotate.classList.toggle('rotate0deg');
    elArrowRotate.classList.toggle('rotate180deg');
});