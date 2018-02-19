import React from 'react';

const WeatherCurrent = (props) => {

    // function timeConverter(UNIX_timestamp){
    //     let a = new Date(UNIX_timestamp * 1000);
    //     let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    //     let year = a.getFullYear();
    //     let month = months[a.getMonth()];
    //     let date = a.getDate();
    //     let hour = a.getHours();
    //     let min = a.getMinutes();
    //     let sec = a.getSeconds();
    //     if (min < 10) min = "0" + min;
    //     return hour + ':' + min;
    // }
    let weatherIconClass = 'weather-icon';

    switch (props.currWeather.query.results.channel.item.condition.code) {
        case '0':
        case '1':
        case '2':
            weatherIconClass = 'weather-icon unknown';
            break;
        case '3':
        case '4':
            weatherIconClass = 'weather-icon storm-weather';
            break;
        case '5':
        case '6':
        case '7':
            weatherIconClass = 'weather-icon rain-snow';
            break;
        case '28':
            weatherIconClass = 'weather-icon mostly-cloudy';
            break;
        case '29':
            weatherIconClass = 'weather-icon partly-cloudy-night';
            break;
        case '30':
        case '23':
            weatherIconClass = 'weather-icon partly-cloudy';
            break;
    }

    return (
        <div className="current-weather">
            <div className={weatherIconClass}></div>
            <strong className="temp">{Math.round((props.currWeather.query.results.channel.item.condition.temp - 32)*5/9)}°</strong>
            <strong>{props.currWeather.query.results.channel.item.condition.text}</strong>

            <p>Ветер: {((props.currWeather.query.results.channel.wind.speed * 1.6) * 1000 / 3600 ).toFixed(1)} м/с</p>
            <p>Направление: {props.currWeather.query.results.channel.wind.direction}</p>

            <p>Влажность: {props.currWeather.query.results.channel.atmosphere.humidity}%</p>

            <div className="sun-options">
                <p>Восход: {props.currWeather.query.results.channel.astronomy.sunrise}</p>
                <p>Закат: {props.currWeather.query.results.channel.astronomy.sunset}</p>
            </div>
        </div>
    )
};


export default WeatherCurrent;