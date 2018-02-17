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

                <h1>Погода в городе: { decodeURI(this.props.cityUri)}</h1>
                {/*<h3>Широта: {this.props.cityLat}</h3>*/}
                {/*<h3>Долгота: {this.props.cityLong}</h3>*/}

                <div className="weather-forecast-block">

                    <WeatherCurrent
                        currWeather={weeklyWeatherData}/>

                    <div className="thumbs-block">
                        <WeatherHoursList weather={this.props.weatherData}/>
                    </div>
                </div>

                <div className="weather-weekly-forecast-block">
                    <WeatherWeeklyList weather={this.props.weeklyWeatherData}/>
                </div>

            </div>
        )
    }
}

export default weatherRender;