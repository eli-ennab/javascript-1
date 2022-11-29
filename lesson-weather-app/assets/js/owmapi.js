/*
* OpenWeatherMap API
*/

// https://api.openweathermap.org/data/2.5/weather?q=Malmö&units=metric&appid=27ba265b00ae8fb3973222c07a9d6f40

const API_KEY = "27ba265b00ae8fb3973222c07a9d6f40";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const FAKE_SLOW_API = true;
const FAKE_SLOW_API_DELAY = 3000;

const getCurrentWeather = async (city) => {
    // Get weather for city from OpenWeatherMap API
    const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);

    const errorEl = document.querySelector('#error');
	errorEl.classList.add('hide');

    // Check if response is OK
    if (!response.ok) {
        errorEl.innerText = `That city does not exist. Error: "${response.statusText}".`;
		errorEl.classList.remove('hide');
        throw new Error(`${response.status} ${response.statusText}`);
    }

    // Convert response from JSON
    const data = await response.json();

    // fake a slow api
    FAKE_SLOW_API && await new Promise(r => setTimeout(r, FAKE_SLOW_API_DELAY));

    // Return current weather
    return data;
}