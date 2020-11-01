import React from "react";

const Form = (props) => {
    return(
        <form onSubmit={props.loadWeather}>
            <input type="text" name={"city"} placeholder={"Izberite mesto"}/>
            <input type="text" name="country" placeholder="Izberite državo"/>
            <button>Išči</button>
        </form>
    )
}
    export default Form;