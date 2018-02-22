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
        case '8':
        case '9':
            weatherIconClass = 'weather-icon haze-weather';
            break;
        case '10':
        case '11':
        case '12':
            weatherIconClass = 'weather-icon rainy-weather';
            break;
        case '13':
        case '14':
        case '15':
        case '16':
            weatherIconClass = 'weather-icon snow-weather';
            break;
        case '26':
            weatherIconClass = 'weather-icon cloudy-weather';
            break;
        case '27':
            weatherIconClass = 'weather-icon mostly-cloudy-night';
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
        case '31':
        case '33':
            weatherIconClass = 'weather-icon clear-night';
            break;
        case '32':
        case '34':
            weatherIconClass = 'weather-icon clear-day';
            break;
        case '35':
            weatherIconClass = 'weather-icon rain-snow';
            break;
        case '36':
            weatherIconClass = 'weather-icon clear-day';
            break;
        case '37':
        case '38':
        case '39':
            weatherIconClass = 'weather-icon storm-weather';
            break;
        case '40':
            weatherIconClass = 'weather-icon rainy-weather';
            break;
        case '41':
            weatherIconClass = 'weather-icon snow-day';
            break;
        case '42':
        case '46':
            weatherIconClass = 'weather-icon rain-snow';
            break;
        case '43':
            weatherIconClass = 'weather-icon snow-night';
            break;
        case '44':
            weatherIconClass = 'weather-icon partly-cloudy';
            break;
        case '45':
        case '47':
            weatherIconClass = 'weather-icon storm-weather';
            break;
        case '3200':
            weatherIconClass = 'weather-icon unknown';
            break;
        default:
            weatherIconClass = 'weather-icon clear-day';
            break;
    }

    return (
        <div className="current-weather">
            <div className={weatherIconClass}></div>
            <div className="total-results">
                <div className="temp">
                    <strong>{Math.round((props.currWeather.query.results.channel.item.condition.temp - 32)*5/9)}°C</strong>
                </div>
                <div className="code-description">
                    {/*<strong>{props.currWeather.query.results.channel.item.condition.code}</strong>*/}
                    <strong>{props.currWeather.query.results.channel.item.condition.text}</strong>
                </div>
            </div>

            <div className="wind">
                <div className="wind-icon"></div>
                <p>{((props.currWeather.query.results.channel.wind.speed * 1.6) * 1000 / 3600 ).toFixed(1)} м/с</p>
                <p>Направление: {props.currWeather.query.results.channel.wind.direction}</p>

            </div>
            <div className="humidity">
                <div className="humidity-icon"></div>
                <p>{props.currWeather.query.results.channel.atmosphere.humidity}%</p>
            </div>

            <div className="sun-options">
                <div className="sun-option">
                    <div className="sun-icon sunrise"></div>
                    <p>{props.currWeather.query.results.channel.astronomy.sunrise}</p>
                </div>
                <div className="sun-option">
                    <div className="sun-icon sunset"></div>
                    <p>{props.currWeather.query.results.channel.astronomy.sunset}</p>
                </div>
            </div>
        </div>
    )
};


export default WeatherCurrent;