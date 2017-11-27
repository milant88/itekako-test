import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import OfficeItem from './OfficeItem';

export class MapContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }

    render() {
        const style = {
            width: '90%',
            height: '90%'
        };
        return (
            <div className="container map">
                <Map
                    google={this.props.google}
                    style={style}
                    initialCenter={{
                        lat: 44.786568,
                        lng: 20.4489216
                    }}
                    zoom={2}
                >
                    {
                        this.props.office.map(office =>
                            <Marker
                                key={office.id}
                                title={office.name}
                                name={office.name}
                                onClick={this.onMarkerClick}
                                position={{
                                    lat: office.latitude,
                                    lng: office.longitude
                                }}
                            >
                                {console.log(office.latitude,office.longitude)}
                            </Marker>
                        )
                    }
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h5>{this.state.selectedPlace.name}</h5>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }

    onMarkerClick =(props, marker) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyApuDiyl8YMkqjOYjB6IUjsNUGKi4tmfKg')
})(MapContainer);