let elements = document.getElementsByClassName('tab')

for (let i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', function (event){
        clearActiveTab()
        event.currentTarget.classList.add('tab_active')
        changeText(i)
    })
}

function clearActiveTab(){
    for (let i = 0; i<elements.length;i++){
        if(elements[i].classList.contains('tab_active')){
            elements[i].classList.remove('tab_active')
        }
    }
}

function changeText(item){
    let tabsContent = document.getElementsByClassName('tab__content')
    for (let i = 0; i < tabsContent.length; i++) {
        if (tabsContent[i].classList.contains('tab__content_active')) {
            tabsContent[i].classList.remove('tab__content_active')
        }
    }
    tabsContent[item].classList.add('tab__content_active')
}
