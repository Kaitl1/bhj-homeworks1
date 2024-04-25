let arrTabs = Array.from(document.getElementsByClassName('tab'))
let arrContents = Array.from(document.getElementsByClassName('tab__content'))

arrTabs.forEach((el) => el.addEventListener('click',function (event){
        if(el.classList.contains('tab_active')){
            console.log(arrTabs.findIndex(el))
                arrContents[arrTabs.findIndex(el)].classList.remove('tab__content_active')
            el.classList.remove('tab_active')
            // }
        }
    event.target.classList.add('tab_active')
    arrContents[arrTabs.findIndex(event.target)].classList.add('tab__content_active')
    })
)