const navBar = document.querySelector('nav');
let lastscrollvalue = 0;
window.addEventListener('scroll', function () {

    if (window.scrollY < lastscrollvalue){
        navBar.style.top = "0"
    }
    else if (window.scrollY > 5){
        navBar.style.top = "-100px"
    }
    lastscrollvalue = window.scrollY
});

let menu = document.querySelector('.menu');
let links = document.querySelector('.links')
let logo = document.querySelector('.logo')
let count = 0;
menu.addEventListener("click", ()=>{
    if(count === 0){
        links.style.transform = "translateY(0)"
        menu.style.color = "white"
        logo.style.color = "white"
        navBar.style.backgroundColor = "black"
        navBar.style.height = "130px"
        navBar.style.borderBottom = "2px solid white"
        window.scroll
        count = 1
       
    }
    else{
        links.style.transform = "translateY(-100%)"
        menu.style.color = "black"
        logo.style.color = "black"
        navBar.style.height = "50px"
        navBar.style.backgroundColor = "#f1f1f196"
        navBar.style.borderBottom = "none"
        count = 0
    }
})






document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.review');
    document.querySelector('.desc-1').style.maxHeight = 'fit-content';
    document.querySelector('.desc-1 .service').style.opacity = '1';

    accordions.forEach(function (accordion) {
        const header = accordion.querySelector('.read');
        const content = accordion.querySelector('.description');

        header.addEventListener('click', function () {
            // Close all accordions
            accordions.forEach(function (item) {
                if (item !== accordion) {
                    item.querySelector('.description').style.maxHeight = '0px';
                    item.querySelector('.description').querySelector(".service").style.opacity = '0';
                }
            });

            // Toggle current accordion
            if (content.style.maxHeight === 'fit-content') {
                content.style.maxHeight = '0px';
                content.querySelector(".service").style.opacity = '0';
            } else {
                content.style.maxHeight = 'fit-content';
                content.querySelector(".service").style.opacity = '1';
                // Scroll to center
                accordion.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
});




