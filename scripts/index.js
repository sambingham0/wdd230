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

function loadMap() {
    const mapIframe = document.getElementById('map');
    const googleMapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10011.546582649106!2d-111.7852206!3d43.8260737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8762af3f5a92e9ef%3A0x3d6e6a4d24cf9197!2sRexburg%2C%20ID%2098340%2C%20USA!5e0!3m2!1sen!2sus!4v1693439384854!5m2!1sen!2sus";
    mapIframe.src = googleMapUrl;
}

const mapContainer = document.getElementById('map-container');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadMap();
            observer.unobserve(mapContainer);
        }
    });
});

observer.observe(mapContainer);