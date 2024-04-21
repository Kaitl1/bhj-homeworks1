const dropdownElement = document.getElementsByClassName('dropdown__value')[0]
dropdownElement.addEventListener('click', addClassActive)

function addClassActive(){
    document.getElementsByClassName('dropdown__list')[0].classList.toggle('dropdown__list_active')
}

const items = document.getElementsByClassName('dropdown__item')
for (let i = 0; i < items.length; i++){
    items[i].addEventListener('click', changeValue)
}

function changeValue(event){
    event.target.closest('ul').previousElementSibling.innerHTML = event.target.firstElementChild.textContent
    addClassActive()
}