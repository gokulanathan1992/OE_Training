var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.backgroundImage = "linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent), url('./assets/img" + `${i+1}` + ".jpg')";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "");
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " activeDot";
    setTimeout(showSlides, 10000);
}