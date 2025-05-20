const WeatherCard = ({date, clouds, precipitation, temperatureMin, temperatureMax, humidity, windspeed}) => {
    return (
        <div>
            <h2>
                {date}
            </h2>
            <div className="weather-card">
                <div className="weather-card-main">
                    {precipitation > 1 ? (
                        <img src="/weathericons/rain.svg" alt="rainy"/>
                    ) : clouds > 85 ? (
                        <img src="/weathericons/cloud.svg" alt="cloudy"/>
                    ) : clouds > 45 ? (
                        <img src="/weathericons/suncloud.svg" alt="semi-cloudy"/>
                    ) : (
                        <img src="/weathericons/sun.svg" alt="sunny"/>
                    )}
                </div>
                <div>
                    <hr/>
                </div>
                <div className="weather-card-row">
                    <img src="/weathericons/temperature.svg" alt="temperature"/>
                    <div className="weather-card-text">
                        <span>{temperatureMax}°C</span>
                        <span>{temperatureMin}°C</span>
                    </div>
                </div>
                <div>
                    <hr/>
                </div>
                <div className="weather-card-row">
                    <img src="/weathericons/humidity.svg" alt="humidity"/>
                    <div className="weather-card-text">
                        <span>{humidity}%</span>
                        <span>{precipitation} mm</span>
                    </div>
                </div>
                <div>
                    <hr/>
                </div>
                <div className="weather-card-row">
                    <img src="/weathericons/wind.svg" alt="wind"/>
                    <span>{windspeed} kmh</span>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;