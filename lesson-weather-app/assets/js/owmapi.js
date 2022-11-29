/*
* OpenWeatherMap API
*/

// https://api.openweathermap.org/data/2.5/weather?q=Malmö&units=metric&appid=27ba265b00ae8fb3973222c07a9d6f40

const API_KEY = "27ba265b00ae8fb3973222c07a9d6f40";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getCurrentWeather = async (city) => {
    // Get weather for city from OpenWeatherMap API
    const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);

    // Check if response is OK
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }

    // Convert response from JSON
    const data = await response.json();

    // Return current weather
    return data;
}

getCurrentWeather("Malmö")
    .then(weather => {
        console.log(weather);
    });
