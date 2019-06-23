import React from "react"
import {
    compose,
    withProps
} from "recompose"
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    Polygon
} from "react-google-maps"
import visualAreas from '../data/Visual'

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCJU7scD4uZ0nZDS3stMHieSEnLj1mbhxY&callback=initMap",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,

    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap className={"googleMap"}
               defaultZoom={14}
               defaultCenter={{ lat: 48.720228, lng: 21.258217 }}
    >
        {props.isMarkerShown }
        {/*<Marker position={marker} onClick={props.onMarkerClick}/>*/}
        {console.log(typeof props.lat+ " " +  typeof props.lng)}
        <Marker position={{lat: props.lat, lng: props.lng}}/>
        {/*{
            iterate through field and write what u should
        }*/}
        <Polygon
            path={visualAreas[0]}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={visualAreas[1]}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={visualAreas[2]}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={visualAreas[3]}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={visualAreas[4]}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={visualAreas[5]}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={visualAreas[6]}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={visualAreas[7]}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={visualAreas[8]}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={visualAreas[9]}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={visualAreas[10]}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
    </GoogleMap>
);

export default MyMapComponent;
