let arrTabs = Array.from(document.getElementsByClassName('tab'))
let arrContents = Array.from(document.getElementsByClassName('tab__content'))
arrTabs.forEach((el) => el.addEventListener('click',function (event){
    if(arrTabs.findIndex(el => el.className.includes('tab_active'))!=-1){
        arrContents[arrTabs.findIndex(el => el.className.includes('tab_active'))].classList.remove('tab__content_active')
        arrTabs[arrTabs.findIndex(el => el.className.includes('tab_active'))].classList.remove('tab_active')
    }else{
        return;
    }
    event.target.classList.add('tab_active')
    arrContents[arrTabs.findIndex(el =>el == event.target)].classList.add('tab__content_active')
    })
)