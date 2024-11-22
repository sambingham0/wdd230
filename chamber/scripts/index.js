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

document.addEventListener('DOMContentLoaded', function () {
    // Get the current day of the week (0 is Sunday, 6 is Saturday)
    const currentDay = new Date().getDay();
    
    // Show the banner only on Monday (1), Tuesday (2), or Wednesday (3)
    if (currentDay === 1 || currentDay === 2 || currentDay === 5) {
        document.getElementById('event-banner').style.display = 'block';
    }

    // Close the banner when the close button is clicked
    document.getElementById('close-banner').addEventListener('click', function () {
        document.getElementById('event-banner').style.display = 'none';
    });
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

// Call the function to execute on page load
displayVisitMessage();

//form scripts
window.onload = function() {
    // Get the hidden input element
    var hiddenInput = document.getElementById('loadTime');
    
    // Set the value of the hidden input to the current date/time in milliseconds
    hiddenInput.value = Date.now();
};
