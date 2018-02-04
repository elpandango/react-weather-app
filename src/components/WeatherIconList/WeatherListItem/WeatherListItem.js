import React from 'react';

const weatherIconItem = (props) => {
    const iconUrl = "http://openweathermap.org/img/w/" + props.icon + ".png";
    // console.log(item.dt_txt);
    // let tempDate = new Date("" + props.date + "");
    return (
        <div className="weather-forecast-block-item-wrap">
            <div className="date">{ props.date }</div>
            <div className="weather-forecast-block-item">
                <img src={iconUrl} alt={props.description} title={props.description}/>
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