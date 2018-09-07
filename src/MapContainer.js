
import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'

class MapContainer extends Component {
  state = {
    lat: 0,
    lng: 0
  }

  componentWillMount(){
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    const success = pos => {
      var crd = pos.coords;
      this.setState({
        lat: crd.latitude,
        lng: crd.longitude
      });

      console.log('Your current position is:');
      console.log('Latitude : ' + crd.latitude);
      console.log('Longitude: ' + crd.longitude);
      console.log('More or less ' + crd.accuracy + ' meters.');
    };

    const error = err => {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  renderMap = () => {
    if (!(this.state.lat === 0)){
      return <Map
        google={this.props.google}
        initialCenter = {{
          lat: this.state.lat,
          lng: this.state.lng
        }}
        zoom = {12}
        >
        <Marker />
      </Map>
    } else {
      return <p>Loading...</p>
    }
  }

  render () {
    return <div>
      {this.renderMap()}
    </div>
  }
}

export default GoogleApiWrapper({
  apiKey:('yourKey')
})(MapContainer)
