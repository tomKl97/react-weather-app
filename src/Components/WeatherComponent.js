import React from "react";
import Heading from "./heading";
import Forecast from "./forecast";

const api_key = "API_key";

class WeatherComponent extends React.Component{

    state = {
        temperature:"",
        city:"",
        country:"",
        humidity:"",
        pressure:"",
        icon:"",
        description:"",
        error:""
    }

    async componentDidMount() {
        await this.getWeather();
    }

    async componentDidUpdate() {
        await this.getWeather();
    }

    getWeather = async () => {

        console.log(this.props);
        if(this.props.city !== ''){
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.city},${this.props.country}&units=metric&appid=${api_key}`)

        const response = await api_call.json().then(
            (resp) => {
                console.log(resp);
                this.setState({
                    temperature: resp.main.temp,
                    city: resp.name,
                    country: resp.sys.country,
                    humidity: resp.main.humidity,
                    pressure: resp.main.pressure,
                    icon: resp.weather[0].icon,
                    description: resp.weather[0].description,
                    error:""
                });
            }
        );
        }
    }

    render() {
        return(
        <div>
            <Heading/>
            <Forecast
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            pressure={this.state.pressure}
            icon={this.state.icon}
            description={this.state.description}
            error = {this.state.error}
            />
        </div>
        )
    }
}

export default WeatherComponent;
