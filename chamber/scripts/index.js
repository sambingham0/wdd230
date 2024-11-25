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
    
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.classList.toggle('dark-mode');
});

document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('event-banner');
    if (banner) { // Check if the element exists
        const currentDay = new Date().getDay();
        if (currentDay === 1 || currentDay === 2 || currentDay === 3) {
            banner.style.display = 'block';
        }

        const closeButton = document.getElementById('close-banner');
        if (closeButton) { // Make sure the close button exists
            closeButton.addEventListener('click', function () {
                banner.style.display = 'none';
            });
        }
    }
});


// Function to display the message based on visit time
function displayVisitMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = new Date();

    // If there's no lastVisit, this is the first visit
    if (!lastVisit) {
        localStorage.setItem('lastVisit', currentDate.toISOString()); // Store current date
        document.getElementById('visits').innerHTML += "<p>Welcome! Let us know if you have any questions.</p>";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const timeDiff = currentDate - lastVisitDate; // Difference in milliseconds
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert to days

        // Update lastVisit date in localStorage
        localStorage.setItem('lastVisit', currentDate.toISOString());

        // Display the appropriate message
        if (daysDiff < 1) {
            document.getElementById('visits').innerHTML = "<p>Back so soon! Awesome!</p>";
        } else {
            const dayText = daysDiff === 1 ? "day" : "days";
            document.getElementById('visits').innerHTML = `<p>You last visited ${daysDiff} ${dayText} ago.</p>`;
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('welcome-message')) {
        displayVisitMessage();
    }
});