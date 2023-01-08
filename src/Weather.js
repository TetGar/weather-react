import React from "react";
import axios from "axios";

export default function Weather() {
  function handleSubmit(response) {
    alert(`The tepmperature in London is ${response.data.main.temp}`);
  }
  let apiKey = "f5e814a04eddfab1740f07bf0328eee2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleSubmit);

  return <h2>Current Weather in the World</h2>;
}
