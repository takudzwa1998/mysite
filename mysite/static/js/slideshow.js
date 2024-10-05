var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slideshow-image");
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");  // Remove the 'active' class from all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }
    slides[slideIndex - 1].classList.add("active"); // Add the 'active' class to the current slide
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}
