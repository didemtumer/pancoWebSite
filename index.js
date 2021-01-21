//Slider Button
const sliderButtonContainer = document.querySelector('.sliderButtonContainer');
const mobilePhone = document.querySelector('.mobilePhone')
let moving = false;
let mouseLastPosition = 0;
let transform = 0;
let lastPageX = 0;
let transformValue = 0;
mobilePhone.addEventListener('mousedown', (e) => {
    moving = true;
    mouseLastPosition = e.pageX;
    transform = window.getComputedStyle(sliderButtonContainer)
        .getPropertyValue('transform') !== 'none'
        ? window.getComputedStyle(sliderButtonContainer)
            .getPropertyValue('transform').split(',')[4].trim()
        : 0;
    console.log(transform);
});

mobilePhone.addEventListener('mousemove', (e) => {
    if (moving) {
        const diffX =  e.pageX - mouseLastPosition;
        if (e.pageX - lastPageX > 0) {
            if (transformValue > 0) {
                return;
            }
        } else {
            if (Math.abs(transformValue) > sliderButtonContainer.offsetWidth - 320) {
                return;
            }
        }
        transformValue = parseInt(transform) + diffX;
        sliderButtonContainer.style.transform = `translateX(${transformValue}px)`;
    }
    lastPageX = e.pageX;
    console.log("hello")
})

mobilePhone.addEventListener('mouseup', () => {
    moving = false;
});
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('navActive');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation ='';
            }else{
                link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        })
        //Burger Animation
        burger.classList.toggle('toggle')
    })
};
navSlide();

