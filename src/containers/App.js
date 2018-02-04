import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import WeatherRender from '../components/WeatherRender/WeatherRender';
import WeatherRequestInput from '../components/WeatherRequestInput/WeatherRequestInput';

class App extends Component {

    state = {
        city: 'Одесса'
    };

    cityInputHandler = (event) => {
        const city = event.target.value;
        this.setState({ city: city });

    };

    render() {
        // console.log(this.state.weatherData);
        return (
            <div className="App">
                <div className="container">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to TimWeather</h1>
                    </header>

                    <WeatherRequestInput
                        ischanged={(event) => this.cityInputHandler(event)}
                        city={this.state.city}
                    />

                    <WeatherRender />
                </div>
            </div>
        );
    }
}

export default App;
