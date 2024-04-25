let elementsArr = Array.from(document.getElementsByClassName('font-size'))
console.log(elementsArr)
    elementsArr.forEach((el) => el.addEventListener('click',function (event){
        console.log(el)

            })
    )