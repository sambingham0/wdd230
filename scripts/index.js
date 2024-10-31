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