import '../App.css';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {API_BASEURL, API_KEY} from "../api.js";
import WeatherCard from "./WeatherCard.jsx";

const Weather = () => {
    const {city} = useParams()
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(`${API_BASEURL}/forecast.json?key=${API_KEY}&q=${city}&days=3`, {
                    method: "GET", headers: {
                        Accept: "application/json", "Content-Type": "application/json"
                    }
                });
                const data = await response.json();
                setWeather(data);
                console.log("Weather", data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }

        fetchWeather();
    }, []);

    return (<>
        {loading ? (<p>Loading..</p>) : (<>
            <h1>{weather?.location?.name}</h1>
            <div className="weather-display">
                {weather?.forecast?.forecastday.map((day, index) => (<WeatherCard key={index}
                                                                                  date={weather?.forecast?.forecastday[index]?.date}
                                                                                  clouds={weather?.forecast?.forecastday[index]?.hour[12]?.cloud}
                                                                                  precipitation={weather?.forecast?.forecastday[index]?.day?.totalprecip_mm}
                                                                                  temperatureMin={weather?.forecast?.forecastday[index]?.day?.mintemp_c}
                                                                                  temperatureMax={weather?.forecast?.forecastday[index]?.day?.maxtemp_c}
                                                                                  windspeed={weather?.current?.wind_kph}
                                                                                  humidity={weather?.forecast?.forecastday[index]?.day?.avghumidity}/>))}
            </div>
        </>)}
    </>);
}

export default Weather;