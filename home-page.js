// Smoothly toggle the mobile menu visibility
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Fade-in effect for content
window.addEventListener('load', function() {
    document.querySelectorAll('.fade-in').forEach(function(element) {
        element.classList.add('show');
    });
});

// Slide functionality
let currentIndex = 0;
const slides = document.querySelectorAll('#slider > div');
const totalSlides = slides.length;

// Show the current slide
function showSlide(index) {
    // Loop back to the first slide if we're at the last one
    if (index >= totalSlides) {
        currentIndex = 0;
    } 
    // Loop to the last slide if we're at the first one
    else if (index < 0) {
        currentIndex = totalSlides - 1;
    } 
    else {
        currentIndex = index;
    }

    // Adjust the slide position
    const slideWidth = slides[0].offsetWidth;
    document.getElementById('slider').style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Move to the previous slide
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Move to the next slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Initial setup: show the first slide
window.onload = function() {
    showSlide(currentIndex);
};

// Optionally, you can add auto-sliding functionality:
setInterval(() => {
    nextSlide();
}, 2000);

// Appointment icon click event for redirecting to the appointment page
document.getElementById('appointment-icon').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    window.location.href = '/appointment'; // Redirect to the appointment page
});
