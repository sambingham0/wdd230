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

const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.hero').classList.toggle('dark-mode');
    document.querySelectorAll('.card').forEach(card => {
        card.classList.toggle('dark-mode');
    });   
    document.querySelector('#company-spotlights').classList.toggle('dark-mode');
    document.querySelectorAll('.spotlight').forEach(spotlight => {
        spotlight.classList.toggle('dark-mode');
    });
    document.querySelector('footer').classList.toggle('dark-mode');
});

function heroTextOverlay() {
    const heroText = document.getElementsByClassName('hero-img-text')[0];
    const screenWidth = window.innerWidth;

    if (screenWidth <= 600) {
        heroText.innerHTML = '<p>small</p>';
    } else if (screenWidth <= 1000) {
        heroText.innerHTML = '<p>medium</p>';
    } else {
        heroText.innerHTML = '<p>large</p>';
    }
}
window.onload = heroTextOverlay;
window.onresize = heroTextOverlay;
