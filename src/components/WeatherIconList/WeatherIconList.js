import React from 'react';
import WeatherListItem from '../../components/WeatherIconList/WeatherListItem/WeatherListItem';

const weatherIconItem = (props) => {
    return props.weather.map((item, index) => {
        return <WeatherListItem
            temp={item.main.temp}
            temp_min={item.main.temp_min}
            temp_max={item.main.temp_max}
            date={item.dt_txt}
            key={index}
            icon={item.weather[0].icon}
            description={item.weather[0].description}
        />
    } );
};

export default weatherIconItem;