let box = document.querySelector(".box");
let div = '';
let color = document.querySelector("input[type='color']");
let span = document.querySelector("span");
let button = document.querySelector("button");
for(let i = 1; i < 1600; i++) {
   div += "<div class='paint'></div>";
}
box.innerHTML = div;
let color_choice = "black";
color.onchange = function(){
    span.innerText = "Ваш цвет: "+ this.value;
    span.style.color = this.value;
    color_choice = this.value;
}
let all_divs = document.querySelectorAll(".paint");
let clk = false;

box.onmousedown = function(){
    clk = true;
}


box.onmouseup = function(){
    clk = false;
}

for(let i = 0; i < all_divs.length; i++){
    all_divs[i].onmouseover = function(){ 
        if(clk) this.style.background = color_choice;
    }
}


button.onclick = function(){
    for(let i = 0; i < all_divs.length; i++){
        all_divs[i].style.background = "white";
    }
}