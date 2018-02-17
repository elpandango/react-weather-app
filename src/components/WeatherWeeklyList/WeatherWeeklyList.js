import React from 'react';
import WeatherWeeklyItem from '../../components/WeatherWeeklyList/WeatherWeeklyItem/WeatherWeeklyItem';

const weatherWeeklyList = (props) => {

    return props.weather.query.results.channel.item.forecast.map((item, index) => {
        return <WeatherWeeklyItem
            date={item.date}
            key={index}
            temp_high={item.high}
            temp_low={item.low}
            day={item.day}
            text={item.text}
        />
    });
};
export default weatherWeeklyList;