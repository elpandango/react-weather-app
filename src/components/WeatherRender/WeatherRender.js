import React, {Component} from 'react';
import WeatherIconList from '../WeatherIconList/WeatherIconList';
import WeatherCurrent from '../WeatherCurrent/WeatherCurrent';
import WeatherWeeklyList from '../WeatherWeeklyList/WeatherWeeklyList';


class weatherRender extends Component {
    constructor() {
        super();
        this.state = {
            iconUrl: null,
            weatherData: null,
            currentWeatherData: null,
            weeklyWeatherData: null,
            currentWeeklyWeatherData: null
        };
    }

    componentDidMount() {

        // const zip = 94088;

        // const URL = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London,uk&appid=b858912012d97512f4f233cfd486a7e4";
        const URL = "http://api.openweathermap.org/data/2.5/forecast?q=Odessa,UA&appid=b858912012d97512f4f233cfd486a7e4&units=metric&lang=ru&cnt=8";
        const currentURL = "http://api.openweathermap.org/data/2.5/weather?q=Odessa,UA&appid=b858912012d97512f4f233cfd486a7e4&units=metric&lang=ru";
        const yahooWeather = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22odessa%2C%20ua%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&u=c";
        // const weeklyURL = "http://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=b858912012d97512f4f233cfd486a7e4";
        // const currentURL = "http://samples.openweathermap.org/data/2.5/weather?q=Odessa,UA&appid=b858912012d97512f4f233cfd486a7e4&units=metric&lang=ru";


        fetch(URL).then(res => res.json()).then(json => {
            this.setState({weatherData: json});
            // console.log(json);
        });

        fetch(currentURL).then(res => res.json()).then(json => {
            const iconUrl = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png";
            this.setState({currentWeatherData: json});
            this.setState({iconUrl: iconUrl});
            // console.log(json);
        });

        fetch(yahooWeather).then(res => res.json()).then(json => {
            this.setState({currentWeeklyWeatherData: json});
            console.log(json.query.results.channel.item.forecast);
        });

        // console.log(this.state.weatherData.list);
        // console.log(this.state.weatherData.list[0]);
    }

    render() {
        const weatherData = this.state.weatherData;
        const currentWeatherData = this.state.currentWeatherData;
        const currentWeeklyWeatherData = this.state.currentWeeklyWeatherData;
        if (!weatherData) return <div>Loading</div>;
        if (!currentWeatherData) return <div>Loading</div>;
        if (!currentWeeklyWeatherData) return <div>Loading</div>;
        // console.log(weatherData.list);
        // console.log(currentWeatherData.weather[0].icon);

        // const weather = weatherData.list.weather[0];
        // const iconUrl = "http://openweathermap.org/img/w/" + currentWeatherData.weather[0].icon + ".png";
        return (
            <div>
                <h1>
                    Погода в городе {currentWeatherData.name}
                </h1>

                <div className="weather-forecast-block">

                    <WeatherCurrent
                        icon={this.state.iconUrl}
                        currWeather={currentWeatherData}/>

                    <div className="thumbs-block">
                        <WeatherIconList weather={weatherData.list}/>
                    </div>
                </div>

                <div className="weather-weekly-forecast-block">
                    <WeatherWeeklyList weather={currentWeeklyWeatherData}/>
                </div>

            </div>
        )
    }
}

export default weatherRender;