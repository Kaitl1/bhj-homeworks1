let elements = document.getElementsByClassName('tab')

for (i = 0; i<elements.length;i++){
    elements[i].addEventListener('click', function (event){
        clearActiveTab()
        event.currentTarget.classList.add('tab_active')
        let itemName = event.currentTarget.innerText
        changeText(itemName)
    })
}

function clearActiveTab(){
    for (let i = 0; i<elements.length;i++){
        if(elements[i].classList.contains('tab_active')){
            elements[i].classList.remove('tab_active')
        }
    }
}

function changeText(name){
    let tabsContent = document.getElementsByClassName('tab__content')
    for(let i = 0; i<tabsContent.length;i++) {
        if (tabsContent[i].classList.contains('tab__content_active')) {
            tabsContent[i].classList.remove('tab__content_active')
        }
    }
    for(let i = 0; i<tabsContent.length;i++) {
        if (name == 'Главная') {
            tabsContent[0].classList.add('tab__content_active')
        }else if (name == 'Обо мне'){
            tabsContent[1].classList.add('tab__content_active')
        }else if (name == 'Контакты'){
            tabsContent[2].classList.add('tab__content_active')
        }
    }
}
