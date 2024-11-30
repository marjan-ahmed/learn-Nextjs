const btn = document.getElementById('btn');
const box = document.getElementById('circle');

btn.addEventListener("click", clickFunc)

function clickFunc() {        
    let count = 0;
    if(count === 0) {
        box.style.background = "yellow";
        count = 1;
        
    }

}