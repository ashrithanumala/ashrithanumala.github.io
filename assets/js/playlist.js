document.addEventListener("DOMContentLoaded", function() {
    const imagePaths = [
        "assets/img/slideshow/slide1.JPG",
        "assets/img/slideshow/slide2.JPG",
        "assets/img/slideshow/slide3.JPG"
    ];

    const playlistContainer = document.getElementById('playlist-container');
    playlistContainer.classList.add('carousel-container');

    const carousel = document.createElement('div');
    carousel.classList.add('carousel');

    imagePaths.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Slide ${index + 1}`;
        img.classList.add('carousel-image');
        if (index === 0) img.classList.add('active');
        carousel.appendChild(img);
    });

    playlistContainer.appendChild(carousel);

    const images = carousel.querySelectorAll('.carousel-image');
    let current = 0;

    function showNextImage() {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }

    setInterval(showNextImage, 3000); // Rotate every 3 seconds
});
