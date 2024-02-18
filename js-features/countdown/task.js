function subtract(){
    let count = document.getElementById('timer').textContent
    count=count*1
    if (count>0){
        count=count-1
        document.getElementById('timer').textContent=count
    }else{
        if (count===0){
            alert('Вы победили в конкурсе!')
            clearInterval(idInterval);
        }
    }
}
const idInterval = setInterval(subtract, 1000);
