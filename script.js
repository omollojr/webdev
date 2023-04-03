let slidercontainer = document.querySelector('slider-container');
let slides = document.querySelectorAll('.slide')
let slidewidth = slides[0].clientWidth;

let currentSlide = 0;

function startSlide() {
    asetInterval(() => {
        currentSlide++;
        if (currentSlide > slidercontainer.length - 1){
            currentSlide = 0;
        }
        slidercontainer.style.transform = 'translateX(${-slidewidth * currentSlide}px)';
    }, 3000);
}

startSlide();
