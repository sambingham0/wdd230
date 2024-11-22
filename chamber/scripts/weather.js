const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const forecastTemps = document.querySelector('.forecast');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=32.71&lon=-117.19&units=imperial&appid=b4c1d2de9658d1462eb5156070a9f8fc';
const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=32.71&lon=-117.19&units=imperial&appid=b4c1d2de9658d1462eb5156070a9f8fc';

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
            i = 0;
            displayForecastResults(data.list, i);
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
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

function displayForecastResults(forecastList, i) {
    const forecastContainer = document.querySelector('.forecast');
    forecastContainer.innerHTML = ''; // Clear existing forecast

    // Filter forecasts to one per day (e.g., 12:00 PM)
    const dailyForecasts = forecastList.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    // Display each day's forecast
    dailyForecasts.forEach(forecast => {
        i += 1;
        
        const temp = Math.round(forecast.main.temp);
        const desc = forecast.weather[0].description;
        const iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;

        // Create elements for display
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('forecast-day');

        const img = document.createElement('img');
        img.setAttribute('src', iconsrc);
        img.setAttribute('alt', desc);

        const labelP = document.createElement('h3');
        if (i > 1) {
            labelP.innerHTML = `In ${i} Days:`;
        } else {
            labelP.innerHTML = `Tomorrow:`;
        }
        const tempP = document.createElement('p');
        tempP.innerHTML = `${temp}&deg;F`;

        const descP = document.createElement('p');
        descP.textContent = desc;

        // Append elements to the forecast container
        dayDiv.appendChild(labelP);
        dayDiv.appendChild(img);
        dayDiv.appendChild(tempP);
        dayDiv.appendChild(descP);
        forecastContainer.appendChild(dayDiv);
    });
}

apiFetch();
forecastAPIFetch();