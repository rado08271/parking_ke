import React from "react"
import './App.css'
import Zones from './Map/Zones'

class App extends React.PureComponent {
    state = {
        isMarkerShown: true,
    };

    getRandomLat(){
        var lat = (Math.random() * ( 48.737575 - 48.704053) + 48.704053).toFixed(6);
        console.log(lat);
        return lat;
    }

    getRandomLng(){
        var lng = (Math.random() * ( 21.229523 - 21.288506) + 21.288506).toFixed(6);
        console.log(lng);
        return lng

    }

    render() {
        return (
            <div>
                <Zones
                    isMarkerShown={this.state.isMarkerShown}
                        lat={Number(this.getRandomLat())}
                        lng={Number(this.getRandomLng())}
                />
            </div>
        )
    }
}

export default App;