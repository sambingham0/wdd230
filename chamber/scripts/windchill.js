const tempID = document.getElementsByClassName('temperature')[0];
const windspeedID = document.getElementsByClassName('windspeed')[0];

const temp = parseFloat(tempID.innerText);
const windspeed = parseFloat(windspeedID.innerText);

const windchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16));
const windchillInt = parseInt(windchill);

document.getElementsByClassName('windchill')[0].textContent = `Wind Chill: ${windchillInt}°F`;