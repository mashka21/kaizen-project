$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        center:true,
        nav:false,
        margin:10,
        responsiveClass:true,
        responsive: {
            0:{
                item:1,
            },
            600:{
                item:1
            },
            1000:{
                item:3
            },

        } 

    })
})

// login js
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});