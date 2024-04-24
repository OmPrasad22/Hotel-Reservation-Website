// Tabs

let pathname = window.location.pathname;
let pagename = pathname.split("/").pop();

if(pagename === ""){
    document.querySelector(".home").classList.add("activelink");
}
if(pagename === "index.html"){
    document.querySelector(".home").classList.add("activelink");
}
if(pagename === "hotel.html"){
    document.querySelector(".hotel").classList.add("activelink");
}
if(pagename === "services.html"){
    document.querySelector(".services").classList.add("activelink");
}
if(pagename === "blog.html"){
    document.querySelector(".blog").classList.add("activelink");
}
if(pagename === "contact.html"){
    document.querySelector(".contact").classList.add("activelink");
    // Offline Map
    
    let off = document.getElementById("online");
    let show = document.getElementById("status");
    if(!navigator.onLine){
        off.src = "Components/offlinemap.png";
        show.style.display = "block";
    }
}
if(pagename === "login.html"){
    document.querySelector(".login").classList.add("activelink");
}




// Slide message

let c = 0;
let m = document.getElementsByClassName("slide-mess");
messageslide();

function messageslide(){
    for(let i=0; i<m.length; i++){
        m[i].style.display = "none";
    }
    c++;
    if(c > m.length){c = 1}
    m[c - 1].style.display = "block";
    setTimeout(messageslide, 3000);
}

// Hotels Facilities


let count = 0;
let active = 0;
let temp = 0;
function show(n){
    active = n;
    temp = 1;
}
let a = ["Gym","Bar","Pickup","Spa","Resturant"];
slideshow();

function slideshow(){
    let x = document.getElementsByClassName("svg-m");
    let y = document.getElementById("text");
    for(let i=0; i<x.length; i++){
        x[i].style.display = "none";
    }
    if(temp == 1){count=active;temp=0;}
    count++;
    if(count > x.length){count = 1}
    x[count - 1].style.display = "block";
    y.innerHTML = a[count-1];
    setTimeout(slideshow, 3000);
}
