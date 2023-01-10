let menu = document.querySelector("#menubtn");
let navbar= document.querySelector(".navbar");

menu.onclick =() =>{
    navbar.classList.toggle('active');
}


let slides = document.querySelectorAll(".slide-container");
let index = 0;

function prev(){
    slides[index].classList.remove('active');
    index = (index-1 + slides.length)%slides.length;
    slides[index].classList.add('active')
}
function next(){
    slides[index].classList.remove('active');
    index = (index +1 )%slides.length;
    slides[index].classList.add('active')
}

var small = document.getElementById("small-image");
var big = document.getElementById("big-image-1");

function display(){
    if
        (document.getElementById("featured-image-1").src.endsWith("lv sneaker.jpg") == true){
        document.getElementById("featured-image-1").src = "nocta 1.jpg";
    }
    else if
        (document.getElementById("featured-image-1").src.endsWith("nocta 1.jpg") == true)
    {
        document.getElementById("featured-image-1").src ="lv sneaker.jpg";
    }
}
