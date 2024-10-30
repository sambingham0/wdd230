const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear(); // Set current year

const lastModified = document.getElementById('lastModified');
lastModified.textContent = "Last modified: " + document.lastModified;

const images = document.querySelectorAll('img');

images.forEach((img) => {
    // Listen for the load event
    img.addEventListener('load', () => {
        img.classList.add('loaded'); // Add the 'loaded' class when the image is fully loaded
    });

    // For images that are already cached, we manually trigger the load event
    if (img.complete) {
        img.dispatchEvent(new Event('load'));
    }
});
