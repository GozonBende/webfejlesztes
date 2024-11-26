document.querySelectorAll('.gallery-container').forEach((container) => {
    const slides = container.querySelectorAll('.carousel-slide');
    const nextButton = container.querySelector('.next-button');
    const prevButton = container.querySelector('.prev-button');
    let currentIndex = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'left', 'right', 'second-left', 'second-right');
            slide.style.opacity = '0'; // Reset opacity

            if (index === currentIndex) {
                slide.classList.add('active');
                slide.style.opacity = '1';
            } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
                slide.classList.add('left');
                slide.style.opacity = '0.8';
            } else if (index === (currentIndex + 1) % slides.length) {
                slide.classList.add('right');
                slide.style.opacity = '0.8';
            } else if (index === (currentIndex - 2 + slides.length) % slides.length) {
                slide.classList.add('second-left');
                slide.style.opacity = '0.5';
            } else if (index === (currentIndex + 2) % slides.length) {
                slide.classList.add('second-right');
                slide.style.opacity = '0.5';
            }
        });
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlides();
    });

    updateSlides(); // Initialize the slider
});
