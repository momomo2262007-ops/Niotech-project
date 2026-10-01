AOS.init();

$(document).ready(function(){
 
  $('.slider').slick({
    slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed:500,
  // dots: true,
  Infinite:true,
  arrows: false,
   responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   ]
  });
});


$('.slider2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
let counters = document.querySelectorAll(".counternum .number h1")

let targetreach = [56 , 32 , 156 , 42 ]
counters.forEach((counter, index)=>{
  let count = 0
  let intervalcounter = setInterval(() => {
    count++
    counter.textContent= count
    if (count === targetreach[index]) {
      clearInterval(intervalcounter)
    }
  }, 50);
})

$(document).ready(function () {
    $("#faqs #left-faqs .accordion .faq-question").click(function(){
      let answer = $(this).next()
      $(".faq-question").not(this).find("i").removeClass("rotate")
      $(".faq-answer").not(answer).slideUp()
      answer.slideToggle()
      $(this).find("i").toggleClass("rotate")
    })
})

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
  



let monthlyDiv = document.getElementById("monthly")
let yearlyDiv = document.getElementById("yearly")

let monthlyCard = document.getElementById("monthly-chosse")
let yearlyCard = document.getElementById("yearly-chosse")



monthlyDiv.onclick = function () {
  monthlyDiv.style.background = "#6d4dff"
  monthlyDiv.style.color = "white"
  
  yearlyDiv.style.background = "white"
  yearlyDiv.style.color = "black"
  monthlyCard.style.display = "flex"
  yearlyCard.style.display = "none"
}

yearlyDiv.onclick = function () {
  monthlyDiv.style.background = "white"
  monthlyDiv.style.color = "black"
  yearlyDiv.style.background = "#6d4dff"
  yearlyDiv.style.color = "white"

  monthlyCard.style.display = "none"
  yearlyCard.style.display = "flex"
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
    const a = document.querySelectorAll("a")
    const i = document.querySelectorAll("i")
    const bloghot = document.getElementById("blog-hot")
    const pricinghot = document.getElementById("pricing-hot")
    const feathot = document.getElementById("feat-hot")
    const testhot = document.getElementById("test-hot")
    const faqshot = document.getElementById("hotfaqs")
    const usinghot = document.getElementById("usingfire")
    const apphot = document.getElementById("hotapp")
    const ourhot = document.getElementById("app-hot")
    const news = document.getElementById("Newsdiv")


    const work1 = document.getElementById("work-1")
    const work2 = document.getElementById("work-2")
    const work3 = document.getElementById("work-3")
    const title = document.getElementById("title")
    const standard = document.getElementById("standard-get")
    const scroll = document.getElementById("scrolltop")


    const counter = document.getElementById("counter")
    const theme = document.getElementById("theme-icon")
    const themep = document.querySelectorAll(".theme-p") 
    const themepp = document.querySelectorAll(".theme-pp") 





    const down = document.getElementById("download")
    const monthly = document.getElementById("monthly")
    const icons = document.querySelectorAll(".icons")
    



    btns.forEach(button =>{
      button.style.backgroundColor =selectedcolor
    })
    a.forEach(links =>{
      links.style.color = selectedcolor
    })
    icons.forEach(alli=>{
      alli.style.color = selectedcolor
    })
    themep.forEach(themepp=>{
      themepp.style.color = selectedcolor
    })
    themepp.forEach(themeppp=>{
      themeppp.style.color = "white"
    })
    bloghot.style.backgroundColor = selectedcolor
    pricinghot.style.backgroundColor = selectedcolor
    feathot.style.backgroundColor = selectedcolor
    testhot.style.backgroundColor = selectedcolor
    faqshot.style.backgroundColor = selectedcolor
    usinghot.style.backgroundColor = selectedcolor
    apphot.style.backgroundColor = selectedcolor
    title.style.backgroundColor = selectedcolor
    ourhot.style.backgroundColor = selectedcolor
    news.style.backgroundColor = selectedcolor
    counter.style.background = selectedcolor
    theme.style.background = selectedcolor
    scroll.style.background = selectedcolor

    standard.style.background = selectedcolor









    down.style.background = selectedcolor
    monthly.style.background = selectedcolor
    work1.style.background = selectedcolor
    work2.style.background = selectedcolor
    work3.style.background = selectedcolor

    



    
  })
})