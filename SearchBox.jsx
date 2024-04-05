import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const APIURL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "cb5c70b08b16fb679ad378738920ab39";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${APIURL}?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            if (jsonResponse.cod === 200) {
                const result = {
                    city: city,
                    temp: jsonResponse.main.temp,
                    min_temp: jsonResponse.main.temp_min,
                    max_temp: jsonResponse.main.temp_max,
                    humidity: jsonResponse.main.humidity,
                    feelsLike: jsonResponse.main.feels_like,
                    weather: jsonResponse.weather[0].description
                };
                console.log(result);
                updateInfo(result);
                setError(false); // Reset error state if the request is successful
            } else {
                setError(true); // Set error state if city not found
            }
        } catch (err) {
            console.error("Error fetching weather data:", err);
            setError(true); // Set error state if there's an error in fetching data
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (city.trim() !== "") {
            getWeatherInfo();
        } else {
            setError(true); // Set error state if city is empty
        }
    };

    return (
        <div className='SearchBox'>
            <h3>Search for the weather!</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br/><br/>
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No such place exists!</p>}
            </form>
        </div>
    );
}
