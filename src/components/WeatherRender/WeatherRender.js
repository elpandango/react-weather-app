import React from 'react';
import WeatherHoursList from '../WeatherHoursList/WeatherHoursList';
import WeatherCurrent from '../WeatherCurrent/WeatherCurrent';
import WeatherWeeklyList from '../WeatherWeeklyList/WeatherWeeklyList';

const weatherRender = (props) => {

    return (
        <div>

            <div className="current-city-weather-block">
                <div className="container">
                    <div className="city-name">{decodeURI(props.cityUri)}</div>

                    <WeatherCurrent
                        currWeather={props.weeklyWeatherData}/>
                </div>
            </div>
            <div className="container">

                <div className="weather-forecast-block">

                    <div className="weather-container">
                        <h3 className="row-title">
                            Прогноз на 24 часа
                        </h3>
                        <div className="weather-row">
                            <div className="heading-elements">
                                <div className="heading-elements-item short">
                                    {/*<div className="result">Day</div>*/}
                                    <div className="title">Дата</div>
                                </div>

                                <div className="heading-elements-item">
                                    <div className="title">Погода</div>
                                    <img src="../images/material-icon-set/weather_icon.png" alt=""/>
                                </div>

                                <div className="heading-elements-item">
                                    <div className="title">Темп.</div>
                                    <img src="../images/material-icon-set/temp_icon.png" alt=""/>
                                </div>
                            </div>

                            <div className="thumbs-block">
                                <WeatherHoursList weather={props.weatherData}/>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="weather-container">
                    <h3 className="row-title">
                        Прогноз на 10 дней
                    </h3>
                    <div className="weather-row">
                        <div className="heading-elements">
                            <div className="heading-elements-item short">
                                {/*<div className="result">Day</div>*/}
                                <div className="title">Дата</div>
                            </div>

                            <div className="heading-elements-item">
                                <div className="title">Погода</div>
                                <img src="../images/material-icon-set/weather_icon.png" alt=""/>
                            </div>

                            <div className="heading-elements-item">
                                <div className="title">Темп.</div>
                                <img src="../images/material-icon-set/temp_icon.png" alt=""/>
                            </div>
                        </div>
                        <div className="weather-weekly-forecast-block">
                            <WeatherWeeklyList weather={props.weeklyWeatherData}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default weatherRender;