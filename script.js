const elLangBtn = document.querySelector('.lang-btn')
const elLangListSecondChild = document.querySelector('.lang-list-last-child')
const elArrowRotate0deg = document.querySelector('.lang-list-arrow-icon')
const elArrowRotate180deg = document.querySelector('.lang-list-arrow-icon')

elLangBtn.addEventListener('click', function(){
    elLangListSecondChild.classList.toggle('bring-down')
    elArrowRotate0deg.classList.toggle('rotate0deg')
    elArrowRotate0deg.classList.toggle('rotate180deg')
})