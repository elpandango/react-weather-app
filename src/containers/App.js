import React, {Component} from 'react';
import './App.css';
import WeatherRender from '../components/WeatherRender/WeatherRender';
import WeatherCityInput from '../components/WeatherCityInput/WeatherCityInput';


class App extends Component {
    constructor(props) {
        super(props);

        const yahooWeather = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Odessa,ua%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        fetch(yahooWeather).then(res => res.json()).then(json => {
            this.setState(
                {weeklyWeatherData: json});
        });
        const URL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + this.state.lat + "&lon=" + this.state.long + "&appid=b858912012d97512f4f233cfd486a7e4&units=metric&lang=ru&cnt=8";
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({weatherData: json});
            // console.log('City is - ' + json.city.name);
        });
    }

    state = {
        city: 'Odessa,ua',
        uri: 'Odessa,ua',
        lat: '46.469479',
        long: '30.74003',
        weeklyWeatherData: null,
        weatherData: null,

    };

    cityGeoCoords = (tempUri) => {
        const yahooWeather = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + tempUri + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        fetch(yahooWeather).then(res => res.json()).then(json => {
            this.setState(
                {
                    weeklyWeatherData: json,
                    lat: json.query.results.channel.item.lat,
                    long: json.query.results.channel.item.long,
                });

            const URL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + json.query.results.channel.item.lat + "&lon=" + json.query.results.channel.item.long + "&appid=b858912012d97512f4f233cfd486a7e4&units=metric&lang=ru&cnt=8";
            fetch(URL).then(res => res.json()).then(json => {
                this.setState({weatherData: json});
            });

        });
    };

    cityKeyPressHandler = (event) => {
        const city = event.target.value;
        let tempUri = '';

        if (event.key === 'Enter') {
            tempUri = encodeURI(event.target.value);
            this.setState({city: city});
            this.setState({uri: tempUri});

            this.cityGeoCoords(tempUri);
        }
    };

    cityInputHandler = (event) => {
        const city = event.target.value;
        this.setState({city: city});
    };

    render() {
        if (!this.state.weeklyWeatherData) return <div>Loading</div>;
        if (!this.state.weatherData) return <div>Loading</div>;
        return (
            <div className="App">
                <div className="container">
                    <header className="App-header">
                        <h1 className="App-title">Welcome to TimWeather</h1>
                    </header>

                    <WeatherCityInput
                        enterPressed={(event) => this.cityKeyPressHandler(event)}
                        ischanged={(event) => this.cityInputHandler(event)}
                        city={this.state.city}
                    />

                    <WeatherRender
                        city={this.state.city}
                        cityUri={this.state.uri}
                        cityLat={this.state.lat}
                        cityLong={this.state.long}
                        weatherData={this.state.weatherData}
                        weeklyWeatherData={this.state.weeklyWeatherData}
                    />
                </div>
            </div>
        );
    }
}

export default App;
