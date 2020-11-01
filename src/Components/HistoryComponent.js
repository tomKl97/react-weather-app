//prikaz seznama zgodovine iskanja

import * as utilites from './utilities';
import React from "react";
import NavigationBar from "./navComponent";
const {Component} = require("react");

class HistoryComponent extends Component{
    state = {
        locations: []
    }
    async componentDidMount() {
        this.setState({locations: await utilites.getAllLocations()});
    }
     renderList = () => {
        return this.state.locations.map((entry,i) => {
            return <li key={i}>{entry.address}</li>
        })
    };
    render() {
        return (
            <div>
                <NavigationBar/>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}
export default HistoryComponent;