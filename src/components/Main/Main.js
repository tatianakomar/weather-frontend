import "./Main.css";
import locationIcon from "../../images/current_location.png";
import React from "react";
import Toggle from "../Toggle/Toggle";
import Chart from "../Chart/Chart";
import bgImageDay from "../../images/current_day.png";
import bgImageNight from "../../images/current_night.png";

function Main({ data }) {
  const conditionIconUrl = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
  const tempCurrent = Math.round(data.current.temp);
  const timeCurrent = new Date(data.current.dt * 1000).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    timeZone: data.timezone,
    timeZoneName: "short",
  });
  const weekDayCurrent = new Date(data.current.dt * 1000).toLocaleString("en-US", {
    weekday: "long",
    timeZone: data.timezone,
  })

  const minTemp = [];
  const maxTemp = [];
  const dayLabels = [];

  data.daily.forEach((day, index, array) => {
    if (index < array.length - 1) {
      minTemp.push(Math.round(day.temp.min));
      maxTemp.push(Math.round(day.temp.max));
      dayLabels.push(
        new Date(day.dt * 1000).toLocaleString("en-US", {
          weekday: "short",
          timeZone: data.timezone,
        })
      );
    }
  });

  const tempMin = Math.round(data.daily[0].temp.min);
  const tempMax = Math.round(data.daily[0].temp.max);
  const dayTime = data.current.dt > data.current.sunrise && data.current.dt < data.current.sunset;
  const wind = Math.round(data.current.wind_speed);
  const humidity = data.current.humidity;
  const pressure = Math.round(data.current.pressure*0.02953);
  const timeSunrise = new Date(data.current.sunrise * 1000).toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "numeric",
      timeZone: data.timezone,
    }
  );

  const timeSunset = new Date(data.current.sunset * 1000).toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "numeric",
      timeZone: data.timezone,
    }
  );

  return (
    <main className="main">
      <section className="current" style={{ background: dayTime ? `#b7e2eb url(${bgImageDay}) bottom/75% no-repeat` : `#45595a url(${bgImageNight}) bottom/75% no-repeat` }}>
        <div className="current__location">
          <img
            className="current__location_icon"
            src={locationIcon}
            alt="Location icon"
          ></img>
          <div>
            <h1 className="current__location_title">New York, NY, USA</h1>
            <p className="current__location_date">{weekDayCurrent} {timeCurrent}</p>
          </div>
        </div>
        <div className="current__condition">
          <p className="current__condition_text">
            {data.current.weather[0].main}
          </p>
          <img
            className="current__condition_icon"
            src={conditionIconUrl}
            alt={data.current.weather[0].main}
          ></img>
        </div>
        <div className="current__temperature">
          <p className="current__temperature_low">{tempMin}</p>
          <p className="current__temperature_now">{tempCurrent}&deg;</p>
          <p className="current__temperature_high">{tempMax}</p>
        </div>
      </section>
      <Toggle wind={wind} humidity={humidity} pressure={pressure} sunrise={timeSunrise} sunset={timeSunset} />
      <Chart minTemp={minTemp} maxTemp={maxTemp} dayLabels={dayLabels} />
    </main>
  );
}

export default Main;
