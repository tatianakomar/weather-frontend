# Weather App
> weather-frontend

A web application designed to provide relevant information on weather in New York City, NY, USA

 
## Features

- Responsive and reusable React components
- The public API service [OpenWeather API]('https://openweathermap.org/api') to get current and forecast weather data
 - Weather forecast chart implemented with [Chart.js]('https://www.chartjs.org/')

## Run locally
Create Project folder in the Home directory
```
mkdir weather
cd weather
```

Run proxy server to resolve OpenWeather API CORS issue:
```
git clone https://github.com/tatianakomar/weather-backend.git
cd weather-backend
npm install
npm run start
```
Run weather-frontend client
```
cd ~/weather
git clone https://github.com/tatianakomar/weather-frontend.git
cd weather-frontend
npm install
npm run start
```

View the project at [http://localhost:3000](`http://localhost:3000`)

## Next Steps
- add the ability to select other cities
- add weather description to chart tooltip

## Demo

To run demo visit [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo), push **Request temporary access to the demo server** button.

Demo published at [https://tatianakomar.github.io/weather-frontend/](https://tatianakomar.github.io/weather-frontend/)

## Deploy
Go to the weather-fronend folder
```
cd ~/weather/weather-frontend
```
Make sure that `baseUrl` in `src\utils\WeatherApi.js` is
```
const baseUrl = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/onecall";
```

Run the following commands:
```
npm run build
npm run deploy
```
