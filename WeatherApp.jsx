import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){

    const [weatherInfo , setWeatherinfo] = useState({
        city : "Wonderland",
        feelsLike: 30.81,
        humidity: 17,
        max_temp: 33.05,
        min_temp: 33.05,
        temp: 33.05,
        weather: "few clouds",
    });

    let updateInfo = (newInfo) => {
        setWeatherinfo(newInfo);
    };

    return(
        <div style={{textAlign:"center"}}>
            <h2> Weather App </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
    </div>
)
}