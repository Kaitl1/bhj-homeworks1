let counter = document.getElementById('clicker__counter').textContent
let cookie = document.getElementById('cookie')

function cookieOnClick(){
    cookie.width === 200?cookie.width = 250:cookie.width = 200
    counter=counter*1+1
    document.getElementById('clicker__counter').textContent=counter;
}

cookie.onclick = cookieOnClick
