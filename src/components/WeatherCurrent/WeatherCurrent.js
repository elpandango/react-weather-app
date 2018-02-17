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

    // console.log(props.currWeather.query.results.channel.astronomy.sunrise);

    return (
        <div className="current-weather">
            {/*<img src={props.icon}/>*/}
            <strong className="temp">{Math.round((props.currWeather.query.results.channel.item.condition.temp - 32)*5/9)}°</strong>
            <strong>{props.currWeather.query.results.channel.item.condition.text}</strong>
            {/*<p>Ветер: {props.currWeather.wind.speed}м/с</p>*/}
            <p>Влажность: {props.currWeather.query.results.channel.atmosphere.humidity}</p>

            <div className="sun-options">
                {/*<p>Восход: {timeConverter(props.currWeather.query.results.channel.astronomy.sunrise)}</p>*/}
                <p>Восход: {props.currWeather.query.results.channel.astronomy.sunrise}</p>
                {/*<p>Закат: {timeConverter(props.currWeather.query.results.channel.astronomy.sunset)}</p>*/}
                <p>Закат: {props.currWeather.query.results.channel.astronomy.sunset}</p>
            </div>
        </div>
    )
};


export default WeatherCurrent;