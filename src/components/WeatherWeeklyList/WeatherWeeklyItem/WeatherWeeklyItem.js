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

    }

    switch (props.code) {
        case '28':
            weatherIconClass = 'weather-icon mostly-cloudy';
            break;
        case '30':
        case '23':
        case '44':
            weatherIconClass = 'weather-icon partly-cloudy';
            break;
        default:
            weatherIconClass = 'weather-icon sunny';
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