import React from 'react';

const weatherIconItem = (props) => {
    let weatherIconClass = 'weather-icon';


    switch (props.icon) {
        case '01d':
            weatherIconClass = 'weather-icon sunny';
            break;
        case '01n':
            weatherIconClass = 'weather-icon clear-night';
            break;
        case '02d':
            weatherIconClass = 'weather-icon partly-cloudy';
            break;
        case '02n':
            weatherIconClass = 'weather-icon partly-cloudy-night';
            break;
        case '03d':
            weatherIconClass = 'weather-icon mostly-cloudy';
            break;
        case '03n':
            weatherIconClass = 'weather-icon mostly-cloudy-night';
            break;
        case '04d':
        case '04n':
            weatherIconClass = 'weather-icon cloudy-weather';
            break;
        case '05d':
        case '05n':
            weatherIconClass = 'weather-icon broken-clouds';
            break;
        case '09d':
        case '09n':
            weatherIconClass = 'weather-icon rainy-weather';
            break;
        case '10d':
            weatherIconClass = 'weather-icon rainy-day';
            break;
        case '10n':
            weatherIconClass = 'weather-icon rainy-night';
            break;
        case '11d':
            weatherIconClass = 'weather-icon storm-weather-day';
            break;
        case '11n':
            weatherIconClass = 'weather-icon storm-weather-night';
            break;
        case '13d':
            weatherIconClass = 'weather-icon snow-day';
            break;
        case '13n':
            weatherIconClass = 'weather-icon snow-night';
            break;
        case '50d':
            weatherIconClass = 'weather-icon haze-day';
            break;
        case '50n':
            weatherIconClass = 'weather-icon haze-night';
            break;
    }

    return (
        <div className="weather-forecast-block-item-wrap">

            <div className="date-info-block">
                <div className="date">{props.date}</div>
            </div>

            <div className="weather-inner-item">
                <div className={weatherIconClass}></div>
                <p>{props.description}</p>
            </div>

            <div className="weather-inner-item">

                <div className="tempCell">
                    <p>Max</p>
                    <strong>{Math.round(props.temp_min)}°</strong>
                </div>

                <div className="tempCell">
                    <p>Min</p>
                    <strong>{Math.round(props.temp_max)}°</strong>
                </div>
            </div>

        </div>
    )
};

export default weatherIconItem;