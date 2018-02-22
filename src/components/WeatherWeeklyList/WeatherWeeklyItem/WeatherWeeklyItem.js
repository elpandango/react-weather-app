import React from 'react';

const weatherWeeklyItem = (props) => {

    let dayOfWeek = 'Понедельник';
    let weatherIconClass = 'weather-icon';

    switch(props.day) {
        case 'Mon':
            dayOfWeek = 'Понедельник';
            break;
        case 'Tue':
            dayOfWeek = 'Вторник';
            break;
        case 'Wed':
            dayOfWeek = 'Среда';
            break;
        case 'Thu':
            dayOfWeek = 'Четверг';
            break;
        case 'Fri':
            dayOfWeek = 'Пятница';
            break;
        case 'Sat':
            dayOfWeek = 'Суббота';
            break;
        case 'Sun':
            dayOfWeek = 'Воскресенье';
            break;
        default:
            dayOfWeek = 'Понедельник';
            break;
    }

    switch (props.code) {
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

        <div className="weather-forecast-block-item-wrap">

            <div className="date-info-block">
                <div className="day-of-week">{props.day}</div>
                <div className="date">{props.date}</div>
            </div>

            <div className="weather-inner-item">
                <div className={weatherIconClass}></div>
                {/*<p>{props.code}</p>*/}
                <div className="weather-description">
                    {props.text}
                </div>
            </div>

            <div className="weather-inner-item">

                <div className="tempCell">
                    <p>Max</p>
                    <strong>{Math.round((props.temp_high-32)*5/9)}°</strong>
                </div>

                <div className="tempCell">
                    <p>Min</p>
                    <strong>{Math.round((props.temp_low-32)*5/9)}°</strong>
                </div>
            </div>
        </div>
    )
};

export default weatherWeeklyItem;