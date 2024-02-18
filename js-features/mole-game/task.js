let holes = document.getElementsByClassName('hole')
let deadCount=document.getElementById('dead').textContent
let lostCount=document.getElementById('lost').textContent
for (let a = 0; a<holes.length;a++){
    holes[a].onclick = checkWin
}

function checkWin(event){
    if(event.target.classList.contains('hole_has-mole')){
        deadCount=deadCount*1+1
        document.getElementById('dead').textContent=deadCount
    }else{
        lostCount=lostCount*1+1
        document.getElementById('lost').textContent=lostCount
    }
    if(deadCount>=10){
        alert("Win!")
        deadCount=0
        lostCount=0
        document.getElementById('dead').textContent=0
        document.getElementById('lost').textContent=0
    }else if (lostCount>=5){
        alert('Loss')
        deadCount=0
        lostCount=0
        document.getElementById('dead').textContent=0
        document.getElementById('lost').textContent=0
    }
}