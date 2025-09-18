import { useState } from "react";

import styles from './Weather.module.scss';

function Weather() {
    const weatherData = {
        hanoi: { city: "Hà Nội", temp: 28, weather: "Nắng", humidity: 65, icon: "☀️" },
        hcm: { city: "TP.HCM", temp: 32, weather: "Có mây", humidity: 78, icon: "☁️" },
        danang: { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ", humidity: 82, icon: "🌧️" }
    }

    const [cityKey, setCityKey] = useState('hanoi');
    const [weather, setWeather] = useState(weatherData[cityKey]);

    const handleChangle = (e) =>{
        const key = e.target.value;
        setCityKey(key);
        setWeather(weatherData[key])
    }
    const refreshWeather = () => {
        setWeather(prev => ({
            ...prev,
            temp : prev.temp + (Math.floor(Math.random() *11) - 5),
            humidity : prev.humidity + (Math.floor(Math.random() *11)-5)
        }))
    }

    return (
        <div className={styles.wrapper}>
            <h1>Weather app</h1>
            <div className={styles.weather_box}>
                <select value={cityKey} onChange={handleChangle}>
                    <option value="hanoi">Hà Nội</option>
                    <option value="hcm">TP.HCM</option>
                    <option value="danang">Đà Nẵng</option>
                </select>

                <div className={styles.weather_icon}>{weather.icon}</div>
                <h2>{weather.city}</h2>
                <p>Nhiệt độ : {weather.temp}°C</p>
                <p>Thời tiết : {weather.weather}</p>
                <p>Độ ẩm : {weather.humidity}</p>

                <button onClick={refreshWeather}>Làm mới</button>
            </div>
        </div>
    )

}

export default Weather;