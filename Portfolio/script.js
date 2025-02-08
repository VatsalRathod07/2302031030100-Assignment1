let index = 0;
const slides = document.querySelector("#carousel");

function nextSlide() {
    index = (index + 1) % 3; // Change '3' to the total number of slides
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 300);