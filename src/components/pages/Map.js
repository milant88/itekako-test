import React, { Component } from 'react';
import MapContainer from '../parts/MapContainer';

class Map extends Component {

    render() {
        return (
            <MapContainer {...this.props}/>
        )
    }
}

export default Map;