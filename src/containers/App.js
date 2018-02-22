import React, {Component} from 'react';
import './App.css';
import WeatherRender from '../components/WeatherRender/WeatherRender';
import WeatherCityInput from '../components/WeatherCityInput/WeatherCityInput';


class App extends Component {
    constructor(props) {
        super(props);

        const yahooWeather = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Odessa,ua%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        fetch(yahooWeather).then(res => res.json()).then(json => {
            this.setState({weeklyWeatherData: json});
        });
        const URL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + this.state.lat + "&lon=" + this.state.long + "&appid=b858912012d97512f4f233cfd486a7e4&units=metric&cnt=8";
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({weatherData: json});
        });
    }

    state = {
        city: 'Одесса',
        uri: 'Одесса',
        lat: '46.469479',
        long: '30.74003',
        weeklyWeatherData: null,
        weatherData: null,
        correctCityName: true
    };

    cityGeoCoords = (tempUri) => {
        const yahooWeather = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + tempUri + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        fetch(yahooWeather).then(res => res.json()).then(json => {
            // if (!json.query.results === null) {
                const correctCityName = this.state.correctCityName;
                this.setState(
                    {
                        weeklyWeatherData: json,
                        lat: json.query.results.channel.item.lat,
                        long: json.query.results.channel.item.long
                    });

                const URL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + json.query.results.channel.item.lat + "&lon=" + json.query.results.channel.item.long + "&appid=b858912012d97512f4f233cfd486a7e4&units=metric&cnt=8";
                fetch(URL).then(res => res.json()).then(json => {
                    this.setState({weatherData: json});

                });
            // } else {
            //     this.setState({ correctCityName: false });
            // }

            // this.setState(
            //     {
            //         weeklyWeatherData: json,
            //         lat: json.query.results.channel.item.lat,
            //         long: json.query.results.channel.item.long
            //     });

            // const URL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + json.query.results.channel.item.lat + "&lon=" + json.query.results.channel.item.long + "&appid=b858912012d97512f4f233cfd486a7e4&units=metric&cnt=8";
            // fetch(URL).then(res => res.json()).then(json => {
            //     this.setState({weatherData: json});
            // });

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
        // let resultRender = null;
        // if (!this.state.correctCityName) {
        //     resultRender = <div>Вы ввели неправильное название города!</div>
        // } else {
        //     resultRender =  <WeatherRender
        //         city={this.state.city}
        //         cityUri={this.state.uri}
        //         cityLat={this.state.lat}
        //         cityLong={this.state.long}
        //         weatherData={this.state.weatherData}
        //         weeklyWeatherData={this.state.weeklyWeatherData}
        //     />
        // }

        if (!this.state.weeklyWeatherData) return <div className="preloader"><img src="../../images/preloader.gif"
                                                                                  alt="preloader"/></div>;
        if (!this.state.weatherData) return <div className="preloader"><img src="../../images/preloader.gif"
                                                                            alt="preloader"/></div>;
        return (
            <div className="App">

                <div className="background-container">
                    <div className="back">

                        <span className="sun-rays"></span>
                        <span className="sun"></span>
                        <div className="cloud one">
                            <span className="cloud-body"></span>
                            <span className="cloud-top"></span>
                            <span className="cloud-puff"></span>
                        </div>
                        <div className="cloud two">
                            <span className="cloud-body"></span>
                            <span className="cloud-top"></span>
                            <span className="cloud-puff"></span>
                        </div>
                    </div>

                </div>

                <div className="weather-heading">
                    <div className="container">
                        <div className="text">Прогноз погоды</div>
                        <WeatherCityInput
                            enterPressed={(event) => this.cityKeyPressHandler(event)}
                            ischanged={(event) => this.cityInputHandler(event)}
                            city={this.state.city}
                        />
                    </div>
                </div>

                <WeatherRender
                    city={this.state.city}
                    cityUri={this.state.uri}
                    cityLat={this.state.lat}
                    cityLong={this.state.long}
                    weatherData={this.state.weatherData}
                    weeklyWeatherData={this.state.weeklyWeatherData}
                />

                <footer className="footer">
                    <div className="container">
                        <p>2018. Created by Eugen Radchenko</p>
                        <p>Non-commercial project</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
