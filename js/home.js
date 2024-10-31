let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel-inner');
    const indicators = document.querySelectorAll('.carousel-indicators div');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    // Loop to the first slide if we exceed the total number
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;
    
    currentIndex = index;

    // Update slide position
    slides.style.transform = `translateX(${-index * 100}%)`;

    // Update indicator
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function setSlide(index) {
    showSlide(index);
}

// Optional: Auto-slide every 3 seconds
setInterval(() => {
    nextSlide();
}, 5000);