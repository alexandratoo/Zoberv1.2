import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export default class HouseMap extends Component {
  constructor(){
    super();
    this.state = {
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false,
      markers: [],
     //  markers: [{
     //    name: 'zober-home',
     //    position: { lat: 37.7576171, lng: -122.4976844 },
     //    icon: {
     //      url: 'http://localhost:3000/icon/z_house.png',
     //      anchor: new google.maps.Point(32,32),
     //      scaledSize: new google.maps.Size(64,64)
     //    }
     //   }, {
     //    name: 'zober-home',
     //    position: { lat: 37.7576171, lng: -122.4875824 },
     //    icon: {
     //      url: 'http://localhost:3000/icon/z_house.png',
     //      anchor: new google.maps.Point(32,32),
     //      scaledSize: new google.maps.Size(64,64)
     //    }
     //   }, {
     //    name: 'zober-home',
     //    position: { lat: 37.7876172, lng: -122.4776854 },
     //    icon: {
     //      url: 'http://localhost:3000/icon/z_house.png',
     //      anchor: new google.maps.Point(32,32),
     //      scaledSize: new google.maps.Size(64,64)
     //    }
     //   }, {
     //    name: 'zober-home',
     //    position: { lat: 37.7376171, lng: -122.4776874 },
     //    icon: {
     //      url: 'http://localhost:3000/icon/z_house.png',
     //      anchor: new google.maps.Point(32,32),
     //      scaledSize: new google.maps.Size(64,64)
     //    }
     //   }, {
     //    name: 'zober-home',
     //    position: { lat: 37.7476172, lng: -122.4776844 },
     //    icon: {
     //      url: 'http://localhost:3000/icon/z_coffee.png',
     //      anchor: new google.maps.Point(32,32),
     //      scaledSize: new google.maps.Size(64,64)
     //    }
     //  }, {
     //   name: 'zober-home',
     //   position: { lat: 37.7426171, lng: -122.4776874 },
     //   icon: {
     //     url: 'http://localhost:3000/icon/z_scroll.png',
     //     anchor: new google.maps.Point(32,32),
     //     scaledSize: new google.maps.Size(64,64)
     //   }
     // }],
     zoom: 12,
     center: { lat: 37.7576171, lng: -122.4875824 },
    }

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

componentWillMount() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:3000/api/v1/houses",
    "method": "GET",
  }

  $.ajax(settings)
  .then((homes) => {
    const homesList = homes.map((house, i) => {
      let randLat = 37.7576171 + (0.1 * Math.random());
      let randLng = -122.4875824 + (0.1 * Math.random());
      let houseMarker = {
        name: house.name,
        position: {
          lat: randLat,
          lng: randLng
        },
        // content: {},
        icon: {
          url: 'http://localhost:3000/icon/z_house.png',
          anchor: new google.maps.Point(32, 32),
          scaledSize: new google.maps.Size(64, 64)
        }
      }
      //
      // for(let prop in house) {
      //   houseMarker.content[prop] = house[prop];
      // }

      return houseMarker
    });

    this.setState({
      markers: homesList
    })

  });
  this.forceUpdate();
}

onMarkerClick(props, marker, e) {
  console.log(props);
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
}

onMapClicked(props) {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
}

  render() {
    return (
      <div>
        <Map style={{width: '60%', height: '100%', position: 'relative'}}
          onClick={ this.state.onMapClicked }
          initialCenter={ this.state.center }
          google={window.google}
          zoom={this.state.zoom}>

          {
            this.state.markers.map((m, i) => {
              return (
                  <Marker
                    key={ i }
                    onClick={ this.onMarkerClick }
                    name={ m.name }
                    position={ m.position }
                    icon={ m.icon }
                  />
                )
              })
            }
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                <div>
                  <h1>Z-house: { this.state.selectedPlace.name }</h1>
                </div>
              </div>
            </InfoWindow>
        </Map>
      </div>
    );
  }
}
