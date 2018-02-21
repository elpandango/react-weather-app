import React, {Component} from 'react';
import WeatherHoursList from '../WeatherHoursList/WeatherHoursList';
import WeatherCurrent from '../WeatherCurrent/WeatherCurrent';
import WeatherWeeklyList from '../WeatherWeeklyList/WeatherWeeklyList';

class weatherRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: this.props.city,
            uri: this.props.uri,
            lat: this.props.lat,
            long: this.props.long,
            iconUrl: null,
            weatherData: this.props.weatherData,
            currentWeatherData: null,
            weeklyWeatherData: this.props.weeklyWeatherData,
        };
    }

    componentDidMount() {

    }

    render() {
        const weeklyWeatherData = this.props.weeklyWeatherData;
        const weatherData = this.props.weatherData;
        // console.log('Render weatherData: = ' + weatherData.city.name);
        if (!weeklyWeatherData) return <div>Loading</div>;
        if (!weatherData) return <div>Loading</div>;

        return (
            <div>

                <div className="current-city-weather-block">
                    <div className="container">
                        <div className="city-name">{decodeURI(this.props.cityUri)}</div>

                        <WeatherCurrent
                            currWeather={weeklyWeatherData}/>
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
                                    <WeatherHoursList weather={this.props.weatherData}/>
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
                                    <div className="title">Date</div>
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
                                <WeatherWeeklyList weather={this.props.weeklyWeatherData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default weatherRender;