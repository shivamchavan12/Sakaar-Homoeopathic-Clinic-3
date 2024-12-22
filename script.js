// Example for the Appointment form validation or handling logic
document.getElementById("appointment-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Appointment Booked!");
});
const menuIcon = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', function() {
    nav.classList.toggle('active'); // Toggle the visibility of the menu
});

