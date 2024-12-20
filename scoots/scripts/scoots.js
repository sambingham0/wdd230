// Closeable Message
const closeMessageButton = document.getElementById('close-message');
const highTempMessage = document.getElementById('high-temp-message');

// Close the high temperature message when the button is clicked

if (closeMessageButton) {
  closeMessageButton.addEventListener('click', function() {
    highTempMessage.style.display = 'none';
  });
}

// Fetch Weather Data from OpenWeatherMap API
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.93&units=imperial&appid=b4c1d2de9658d1462eb5156070a9f8fc';
const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=32.71&lon=-117.19&units=imperial&appid=b4c1d2de9658d1462eb5156070a9f8fc';

const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherTitle = document.querySelector('#weather-condition');
const captionDesc = document.querySelector('#weather-description');
const currentHumid = document.querySelector('#humidity');
const tempHigh = document.querySelector('#high-temp');

async function apiFetch() {
  try {
      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          console.log(data);
          displayResults(data);
      } else {
          throw Error(await response.text());
      }
  } catch (error) {
      console.log(error);
  }
}
async function forecastAPIFetch() {
  try {
      const response = await fetch(forecasturl);
      if (response.ok) {
          const data = await response.json();
          console.log(data);
          displayForecast(data.list);
      } else {
          throw Error(await response.text());
      }
  } catch (error) {
      console.log(error);
  }
}

function displayResults(data) {
  const temp = Math.round(data.main.temp);
  currentTemp.innerHTML = `${temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let title = data.weather[0].main;
  let desc = data.weather[0].description;
  weatherTitle.innerHTML = title;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;

  const humid = data.main.humidity;
  currentHumid.innerHTML = `${humid}%`;

  const high = data.main.temp_max;
  tempHigh.innerHTML = `Today's high temperature: ${high}&deg;F`;
}

function displayForecast(forecastList) {
  const forecast = document.querySelector('#forecast');

  // Get tomorrow's date in 'YYYY-MM-DD' format
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'

  // Find the forecast for tomorrow at 3 PM
  const tomorrowForecast = forecastList.find(item => 
    item.dt_txt.includes(tomorrowStr) && item.dt_txt.includes("15:00:00")
  );

  const temp = Math.round(tomorrowForecast.main.temp);
  forecast.innerHTML = `${temp}&deg;F`;
}


apiFetch();
forecastAPIFetch();

// rentals scripts
async function getRentals() {
  const response = await fetch('data/rental.json');
  const data = await response.json();
  console.log(data);

  loadRentalData(data)
}

function loadRentalData(rentalData) {
  const tableBody = document.querySelector("#rental-pricing");
  
  rentalData.forEach(rental => {
    const row = document.createElement("tr");
    
    row.innerHTML = `
      <td>${rental.rentalType}</td>
      <td>${rental.maxPersons}</td>
      <td>${rental.halfDay}</td>
      <td>${rental.fullDay}</td>
      <td>${rental.walkInHalfDay}</td>
      <td>${rental.walkInFullDay}</td>
    `;
    
    tableBody.appendChild(row);
  });
}

if (tableBody) {
  window.onload = getRentals;
}
