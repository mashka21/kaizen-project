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