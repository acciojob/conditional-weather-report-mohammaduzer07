
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weatherInp, setWeather] = useState({
    temperature: "",
    conditions: "",
  });

  useEffect(() => {
    setWeather({temperature: "25", conditions: "Sunny"});
  }, [])
  return (
    <div>
      <WeatherDisplay {...weatherInp}/>
    </div>
  )
}

export default App
