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


let monthlyDiv = document.getElementById("monthly")
let yearlyDiv = document.getElementById("yearly")

let monthlyCard = document.getElementById("monthly-chosse")
let yearlyCard = document.getElementById("yearly-chosse")



monthlyDiv.onclick = function () {
  monthlyDiv.classList.add("active")
  yearlyDiv.classList.remove("active")

  monthlyCard.style.display = "flex"
  yearlyCard.style.display = "none"
}

yearlyDiv.onclick = function () {
  monthlyDiv.classList.remove("active")
  yearlyDiv.classList.add("active")

  monthlyCard.style.display = "none"
  yearlyCard.style.display = "flex"
}