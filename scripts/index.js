// scripts/hamburger.js

const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear(); // Set current year

const lastModified = document.getElementById('lastModified');
lastModified.textContent = "Last modified: " + document.lastModified;

// Hamburger menu functionality
const hamButton = document.getElementById('menu'); // Hamburger button
const navigation = document.getElementById('nav-list'); // Navigation list

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show'); // Toggle the menu visibility
    hamButton.classList.toggle('open'); // Toggle the open class
});

// visits display
const visitsDisplay = document.querySelector('.visits');

let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = "I don't think we've met. Welcome!";
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

// FORM SCRIPTS
function checkPasswords() {
    const password = document.getElementById('password');
    const repass = document.getElementById('repass');

    // Check if the passwords match
    if (password.value !== repass.value) {
        alert("Passwords do not match. Please try again.");
        password.value = "";  // Clear both fields
        repass.value = "";
        password.focus();  // Focus on the first password field
        return false;  // Prevent form submission
    }
    return true;  // Allow form submission if passwords match
}

function updateRating(value) {
    document.getElementById('ratingValue').textContent = value;
}