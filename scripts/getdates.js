const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear(); // Set current year

const lastModified = document.getElementById('lastModified');
lastModified.textContent = "Last modified: " + document.lastModified;