import React from 'react';

const weatherIconItem = (props) => {
    const iconUrl = "http://openweathermap.org/img/w/" + props.icon + ".png";

    let weatherIconClass = 'icon';


    switch (props.icon) {
        case '01d':
        case '01n':
            weatherIconClass = 'icon clean';
            break;
        case '02d':
        case '02n':
            weatherIconClass = 'icon few-clouds';
            break;
        case '03d':
        case '03n':
            weatherIconClass = 'icon clouds';
            break;
        case '04d':
        case '04n':
            weatherIconClass = 'icon scattered-clouds';
            break;
        case '05d':
        case '05n':
            weatherIconClass = 'icon broken-clouds';
            break;
        case '09d':
        case '09n':
            weatherIconClass = 'icon shower-rain';
            break;
        case '10d':
        case '10n':
            weatherIconClass = 'icon rain';
            break;
        case '11d':
        case '11n':
            weatherIconClass = 'icon thunderstorm';
            break;
        case '13d':
        case '13n':
            weatherIconClass = 'icon snow';
            break;
        case '50d':
        case '50n':
            weatherIconClass = 'icon mist';
            break;
    }

    return (
        <div className="weather-forecast-block-item-wrap">
            <div className="date">{props.date}</div>
            <div className="weather-forecast-block-item">
                <div className={weatherIconClass}></div>
                <div className="temp">
                    <div className="temp-col">
                        <p>Мин</p>
                        <strong>{Math.round(props.temp_min)}°</strong>
                    </div>
                    <div className="temp-col">
                        <p>Макс</p>
                        <strong>{Math.round(props.temp_max)}°</strong>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default weatherIconItem;