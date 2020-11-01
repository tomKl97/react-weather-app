import React from "react";
import './forecast.css';

const Forecast = (props) =>{
    return(

        <div className="forecast">
            {props.country && props.city && <p>Lokacija: {props.city}, {props.country}</p>}
            {props.temperature && <p>Temperatura: {props.temperature} °C</p>}
            {props.humidity && <p>Vlažnost: {props.humidity}%</p>}
            {props.pressure && <p>Pritisk: {props.pressure} hPa</p>}
            {props.icon && <img src = {`http://openweathermap.org/img/wn/${props.icon}.png`} alt = "ikona"/>}
            {props.description && <p>Razmere: {props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    )
}
export default Forecast;