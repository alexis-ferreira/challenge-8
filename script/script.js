'use strict';

// => VARIABLES

// SLIDER

let imgSlider = document.getElementById('imgSlider');
// console.log(imgSlider);

let titleDescription = document.getElementById('titleDescription');
// console.log(titleDescription);

let descriptionText = document.getElementById('descriptionText');
// console.log(descriptionText);

// BUTTON

let previousBtn = document.getElementById('previousImg');
// console.log(previousBtn);

let nextBtn = document.getElementById('nextImg');
// console.log(nextBtn);


// ARRAY SOURCE

let sourceImgSlider = [
"./images/mobile-image-hero-1.jpg",
"./images/mobile-image-hero-2.jpg",
"./images/mobile-image-hero-3.jpg",
"./images/desktop-image-hero-1.jpg",
"./images/desktop-image-hero-2.jpg",
"./images/desktop-image-hero-3.jpg"
];
// console.log(sourceImgSlider);

let sourceTitleSlider = [
"Discover innovative ways to decorate",
"We are available all across the globe",
"Manufactured with the best materials"
];
// console.log(sourceTitleSlider);

let sourceTextSlider = [

"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",

"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",

"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
];
// console.log(sourceTextSlider);






// -----------> SLIDER

// SCRIPT

document.addEventListener('DOMContentLoaded', function(){

    if (screen.width <= 480){

        imgSlider.setAttribute('src', sourceImgSlider[0]);

    } else {

        imgSlider.setAttribute('src', sourceImgSlider[3]);
    }
})

nextBtn.addEventListener('click', function(){

    if (screen.width <= 480){

        if (imgSlider.getAttribute('src') == sourceImgSlider[0]){
            // console.log("work");
            imgSlider.setAttribute('src', sourceImgSlider[1]);
            titleDescription.innerHTML = sourceTitleSlider[1];
            descriptionText.innerHTML = sourceTextSlider[1];
    
        } else if (imgSlider.getAttribute('src') == sourceImgSlider[1]){
            imgSlider.setAttribute('src', sourceImgSlider[2]);
            titleDescription.innerHTML = sourceTitleSlider[2];
            descriptionText.innerHTML = sourceTextSlider[2];
    
        } else {
            imgSlider.setAttribute('src', sourceImgSlider[0]);
            titleDescription.innerHTML = sourceTitleSlider[0];
            descriptionText.innerHTML = sourceTextSlider[0];

        }
    } else {

        if (imgSlider.getAttribute('src') == sourceImgSlider[3]){
            // console.log("work1");
            imgSlider.setAttribute('src', sourceImgSlider[4]);
            titleDescription.innerHTML = sourceTitleSlider[1];
            descriptionText.innerHTML = sourceTextSlider[1];
    
        } else if (imgSlider.getAttribute('src') == sourceImgSlider[4]){
            // console.log("work2");
            imgSlider.setAttribute('src', sourceImgSlider[5]);
            titleDescription.innerHTML = sourceTitleSlider[2];
            descriptionText.innerHTML = sourceTextSlider[2];
    
        } else {
            // console.log("work3");
            imgSlider.setAttribute('src', sourceImgSlider[3]);
            titleDescription.innerHTML = sourceTitleSlider[0];
            descriptionText.innerHTML = sourceTextSlider[0];
        }

    }
});

previousBtn.addEventListener('click', function(){

    if (screen.width <= 480){

        if (imgSlider.getAttribute('src') == sourceImgSlider[0]){
            // console.log("work");
            imgSlider.setAttribute('src', sourceImgSlider[2]);
            titleDescription.innerHTML = sourceTitleSlider[2];
            descriptionText.innerHTML = sourceTextSlider[2];
    
        } else if (imgSlider.getAttribute('src') == sourceImgSlider[1]){
            imgSlider.setAttribute('src', sourceImgSlider[0]);
            titleDescription.innerHTML = sourceTitleSlider[0];
            descriptionText.innerHTML = sourceTextSlider[0];
    
        } else {
            imgSlider.setAttribute('src', sourceImgSlider[1]);
            titleDescription.innerHTML = sourceTitleSlider[1];
            descriptionText.innerHTML = sourceTextSlider[1];
        }

    } else {
        
        if (imgSlider.getAttribute('src') == sourceImgSlider[3]){
            // console.log("work1");
            imgSlider.setAttribute('src', sourceImgSlider[5]);
            titleDescription.innerHTML = sourceTitleSlider[1];
            descriptionText.innerHTML = sourceTextSlider[1];
    
        } else if (imgSlider.getAttribute('src') == sourceImgSlider[5]){
            // console.log("work2");
            imgSlider.setAttribute('src', sourceImgSlider[4]);
            titleDescription.innerHTML = sourceTitleSlider[2];
            descriptionText.innerHTML = sourceTextSlider[2];
    
        } else {
            // console.log("work3");
            imgSlider.setAttribute('src', sourceImgSlider[3]);
            titleDescription.innerHTML = sourceTitleSlider[0];
            descriptionText.innerHTML = sourceTextSlider[0];
        }
    }
});



// -----------> MENU BURGER RESPONSIVE

// ----> VARIABLES

// EVENT

let btnMenuBurger = document.getElementById('btn-menu-responsive');
// console.log(btnMenuBurger);

let btnCloseMenuBurger = document.getElementById('closeMenuBurger');
// console.log(btnCloseMenuBurger);

// MENU

let menuBurger = document.getElementById('menu-responsive');
// console.log(menuBurger);

let opacityMenuBurger = document.getElementById('opacityMenuBurger');
// console.log(opacityMenuBurger);


// ----> SCRIPT 

btnMenuBurger.addEventListener('click', function(){

    menuBurger.style.display = "flex";

    setTimeout(() => {
        menuBurger.style.opacity = "1";
    }, 1);

    opacityMenuBurger.style.height = window.innerHeight + "px";
    opacityMenuBurger.style.backgroundColor = "rgba(0, 0, 0, 0.80)";
})

btnCloseMenuBurger.addEventListener('click', function(){

        menuBurger.style.opacity = "0";

    setTimeout(() => {
        menuBurger.style.display = "none";

        opacityMenuBurger.style.height = "0";
    }, 1000);

    opacityMenuBurger.style.backgroundColor = "rgba(0, 0, 0, 0)";
})