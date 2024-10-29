
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Increment slide index and loop back if necessary
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }    

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

window.onload = function() {
    showSlides(); // Start slideshow after the page has fully loaded

    // Show the first slide explicitly
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length > 0) {
        slides[0].style.display = "block"; // Ensure the first slide is visible
    }
};
