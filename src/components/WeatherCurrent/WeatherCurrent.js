import React, {Component} from 'react';

const WeatherCurrent = (props) => {

    function timeConverter(UNIX_timestamp){
        let a = new Date(UNIX_timestamp * 1000);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        if (min < 10) min = "0" + min;
        return hour + ':' + min;
    }

    console.log(timeConverter(1517721371));

    return (
        <div className="current-weather">
            <img src={props.icon}/>
            <p className="temp">{props.currWeather.main.temp}°</p>
            <p>Ветер: {props.currWeather.wind.speed}м/с</p>

            <div className="sun-options">
                <p>Восход: {timeConverter(props.currWeather.sys.sunrise)}</p>
                <p>Закат: {timeConverter(props.currWeather.sys.sunset)}</p>
            </div>
        </div>
    )
};

export default WeatherCurrent;