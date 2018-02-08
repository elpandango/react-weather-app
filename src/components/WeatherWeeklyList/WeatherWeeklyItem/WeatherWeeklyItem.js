import React from 'react';

const weatherWeeklyItem = (props) => {

    let dayOfWeek = 'Monday';

    console.log(props.day);

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

    return (
        <div className="weather-forecast-block-item-wrap">
            <div className="day-of-week">{dayOfWeek}</div>
            <div className="date">{props.date}</div>
            <div className="weather-forecast-block-item">
                <div>{props.text}</div>
                <div className="temp">
                    <div className="temp-col">
                        <p>Мин</p>
                        <strong>{Math.round((props.temp_low-32)*5/9)}°</strong>
                    </div>
                    <div className="temp-col">
                        <p>Макс</p>
                        <strong>{Math.round((props.temp_high-32)*5/9)}°</strong>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default weatherWeeklyItem;