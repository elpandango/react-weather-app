import React, {Component} from 'react';
import WeatherIconList from '../WeatherIconList/WeatherIconList';
import WeatherCurrent from '../WeatherCurrent/WeatherCurrent';


class weatherRender extends Component {
    constructor() {
        super();
        this.state = {
            iconUrl: null,
            weatherData: null,
            currentWeatherData: null,
            weeklyWeatherData: null
        };
    }

    componentDidMount() {

        // const zip = 94088;

        // const URL = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London,uk&appid=b858912012d97512f4f233cfd486a7e4";
        const URL = "http://api.openweathermap.org/data/2.5/forecast?q=Odessa,UA&appid=b858912012d97512f4f233cfd486a7e4&units=metric&lang=ru&cnt=8";
        const currentURL = "http://api.openweathermap.org/data/2.5/weather?q=Odessa,UA&appid=b858912012d97512f4f233cfd486a7e4&units=metric&lang=ru";
        // const weeklyURL = "http://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=b858912012d97512f4f233cfd486a7e4";
        // const currentURL = "http://samples.openweathermap.org/data/2.5/weather?q=Odessa,UA&appid=b858912012d97512f4f233cfd486a7e4&units=metric&lang=ru";


        fetch(URL).then(res => res.json()).then(json => {
            this.setState({weatherData: json});
            // console.log(json);
        });

        fetch(currentURL).then(res => res.json()).then(json => {
            const iconUrl = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png";
            this.setState({currentWeatherData: json});
            this.setState({ iconUrl: iconUrl });
            // console.log(json);
        });

        // fetch(weeklyURL).then(res => res.json()).then(json => {
        //     this.setState({weeklyWeatherData: json});
        //     console.log(json);
        // });

        // console.log(this.state.weatherData.list);
        // console.log(this.state.weatherData.list[0]);
    }

    render() {
        const weatherData = this.state.weatherData;
        const currentWeatherData = this.state.currentWeatherData;
        if (!weatherData) return <div>Loading</div>;
        // console.log(weatherData.list);
        // console.log(currentWeatherData.weather[0].icon);

        // const weather = weatherData.list.weather[0];
        // const iconUrl = "http://openweathermap.org/img/w/" + currentWeatherData.weather[0].icon + ".png";
        return (
            <div>
                <h1>
                    {/*{weather.main} in {weatherData.name}*/}
                    {/*<img src={iconUrl} alt={weatherData.description} />*/}
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

                </div>

            </div>
        )
    }
}

export default weatherRender;