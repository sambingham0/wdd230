const lastModified = document.getElementById('lastModified');
lastModified.textContent = "Last modified: " + document.lastModified;

const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Initialize ARIA attribute
menuToggle.setAttribute('aria-expanded', 'false');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isActive = navMenu.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isActive); // Update ARIA attribute
});

function toggleDescription(button) {
    const hiddenText = button.previousElementSibling; // Get the span with hidden text
    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "inline"; // Show the hidden text
        button.textContent = "Less"; // Change button text to "Less"
    } else {
        hiddenText.style.display = "none"; // Hide the text again
        button.textContent = "More"; // Change button text to "More"
    }
}