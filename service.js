AOS.init();



var frontEnd = document.getElementById("front-end");
var backEnd = document.getElementById("back-end");
var frontEndChoose = document.querySelector(".front-end-choose");
var backEndChoose = document.querySelector(".back-end-choose");

frontEnd.addEventListener("click", function(){
    frontEndChoose.style.display = "block";
    backEndChoose.style.display = "none";
    
    frontEnd.style.background = "#6d4dff"
    frontEnd.style.color = "white"
    
    backEnd.style.background = "white"
    backEnd.style.color = "black"
    
});

backEnd.addEventListener("click", function(){

  frontEndChoose.style.display = "none";
  backEndChoose.style.display = "block";
  frontEnd.style.background = "white"
  frontEnd.style.color = "black"
  backEnd.style.background = "#6d4dff"
  backEnd.style.color = "white"
});


let scrolltop =document.getElementById("scrolltop")
window.addEventListener("scroll" ,function () {
  
  
  
  if (window.scrollY>200) {
    scrolltop.classList.add("show")
  }else{
    scrolltop.classList.remove("show")
  }
})

scrolltop.addEventListener("click" , function () {
  window.scrollTo({
    top: 0, 
    behavior: "smooth"
  })
})
  
let firstsection = document.getElementById("firstSection")
let quarterpage = document.documentElement.scrollHeight/ 8
  window.addEventListener("scroll", function () {
    if (window.scrollY>= quarterpage) {
      firstsection.classList.add("fixed")
      setTimeout(function () {
        firstsection.classList.add("show")
      }, 50)
    }else{
      firstsection.classList.remove("show")
      firstsection.classList.remove("fixed")
    }
  })



  let lightbtn = document.getElementById("lightbtn")
  let darkbtn = document.getElementById("darkbtn")
  
  lightbtn.onclick = function () {
    document.body.classList.remove("dark")
    lightbtn.classList.add("active")
    darkbtn.classList.remove("active")
    localStorage.setItem("theme", "light")
  }
  darkbtn.onclick = function () {
    document.body.classList.add("dark")
    lightbtn.classList.remove("active")
    darkbtn.classList.add("active")
    localStorage.setItem("theme" , "dark")
  }
  var savedtheme = localStorage.getItem("theme")
  
  if(savedtheme === "dark") {
    document.body.classList.add("dark")
    lightbtn.classList.remove("active")
    darkbtn.classList.add("active")
  } else { 
    document.body.classList.remove("dark")
    lightbtn.classList.add("active")
    darkbtn.classList.remove("active")
  }

var themeicon = document.getElementById("theme-icon")
var themechange = document.getElementById("theme-change")
var themecolor = document.querySelectorAll(".theme-color")

themeicon.addEventListener("click", ()=>{
  themechange.classList.toggle("active")
})
themecolor.forEach(color =>{
  color.addEventListener("click", ()=>{
    const selectedcolor = getComputedStyle(color).backgroundColor

    const btns = document.querySelectorAll("button")
    const btn = document.getElementById("btn")
    const a = document.querySelectorAll("a")
    const scroll = document.getElementById("scrolltop") 
    const icons = document.querySelectorAll(".icons")
    const frontend = document.getElementById("front-end")
    



    frontend.style.background =selectedcolor
    btn.style.background = selectedcolor
    scroll.style.background = selectedcolor
    btns.forEach(button =>{
      button.style.backgroundColor =selectedcolor
    })
    a.forEach(links =>{
      links.style.color = selectedcolor
    })
    icons.forEach(alli=>{
      alli.style.color = selectedcolor
    })
  })
})
  