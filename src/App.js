import './App.css';
import GoogleMap from "./Components/GoogleMap";
import React, {Component} from "react";
import NavigationBar from "./Components/navComponent";
import WeatherComponent from "./Components/WeatherComponent";

class App extends Component {
    state ={
        city: "",
        country: ""
    }

    handleLocation = (address) => {
        const splittedAddress = address.split(',');
        const city = splittedAddress[1].split(' ');
        console.log(city);
        this.setState({
            city: city[2],
            country: splittedAddress[2]
        })
    }

    render() {
      return (

          <div className="main-wrapper">
              <NavigationBar/>
              <GoogleMap onSelectedLocation={this.handleLocation}/>
              <div className="weather">
                  <WeatherComponent city={this.state.city} country={this.state.country}/>
              </div>
          </div>
      );
  }


}

export default App;
