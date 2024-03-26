function addClassActive(){
    document.getElementsByClassName('dropdown__list')[0].classList.add('dropdown__list_active')
}

function changeValue(el){
    document.getElementsByClassName('dropdown__value')[0].innerHTML = el.firstElementChild.textContent
    document.getElementsByClassName('dropdown__list')[0].classList.remove('dropdown__list_active')
}