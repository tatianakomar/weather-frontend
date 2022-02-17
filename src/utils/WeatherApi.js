// api.openweathermap has CORS policy, that is why for gh-pages the proxy server(https://cors-anywhere.herokuapp.com) is required
//const baseUrl = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/onecall";
const baseUrl = "http://localhost:3005/onecall";
const KEY = "c8221653a6d201f0c05ed41ce6f0bc61";
const lat = "40.71";
const lon = "-74";

class WeatherApi {
  getData() {
    return fetch(`${baseUrl}?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely,alerts&appid=${KEY}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  };
}

const weatherApi = new WeatherApi();
export default weatherApi;
