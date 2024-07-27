document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");

        // Ensure slides are present
        if (slides.length === 0) return;
        console.log(slides.length);
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;  // Reset slideIndex to 1 if it exceeds the number of slides
        }

        // Display the current slide
        slides[slideIndex - 1].style.display = "block";

        // Call showSlides again after 2 seconds
        setTimeout(showSlides, 2000);  // Change image every 2 seconds
    }
});
