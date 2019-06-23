import React from "react"
import {
    booleanPointInPolygon, inside
} from '@turf/turf'

import poly from '../data/data.json';
import MyMapComponent from './Map'
import './Zones.css'

//I can do compose => withProps but oke
class Zones extends React.Component {
    constructor(props){
        super(props);
        this.state = {point}
        //this is not the greatest way to do it
        point.geometry.coordinates[0] = this.props.lat;
        point.geometry.coordinates[1] = this.props.lng;
    }

    inZone(pt, polygon) {
        return inside(pt, polygon) ? true : false;
    };

    inCity(){
        if(inside(point, poly[10])){
            //you are inside the city!
            console.log("Welcome to Kosice!");
            return true;
        }
        return false;
    }

    whichZone(){
        if(!this.inCity()){
            return "You are not inside the city!\n"
        }

        for(var i = 0; i < poly.length-1; i++){
            if (this.inZone(point, poly[i])){
                return "You are inside the " + poly[i].name + "\n"
            }
        }

        return "Welcome to the city"
    };

    render(){
        return (
            <div>
                <div id={"coords"}>
                    <p>{this.props.lat + " " +  this.props.lng}</p>
                </div>

                <MyMapComponent
                    isMarkerShown={this.props.isMarkerShown}
                    lat={this.props.lat}
                    lng={this.props.lng}
                />
                <div id={"center"}>
                    {this.whichZone()}
                </div>
            </div>
        )
    }
}

const point = {
    "type": "Feature",
    "properties": {
        "marker-color": "#f00"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [0, 0]
    }
};


export default Zones;