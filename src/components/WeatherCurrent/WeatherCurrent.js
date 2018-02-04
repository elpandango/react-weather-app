import React, {Component} from 'react';

const WeatherCurrent = (props) => {
    let d = new Date();
    d.setDate(props.currWeather.sys.sunrise);
    console.log(d.getHours());

    return (
        <div className="current-weather">
            <img src={props.icon}/>
            <p className="temp">{props.currWeather.main.temp}°</p>
            <p>Ветер: {props.currWeather.wind.speed}м/с</p>

            <div className="sun-options">
                <p>Восход: {props.currWeather.sys.sunrise}</p>
                <p>Закат: {props.currWeather.sys.sunset}</p>
            </div>
        </div>
    )
};

export default WeatherCurrent;