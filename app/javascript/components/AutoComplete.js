import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Map, InfoWindow, Marker } from 'google-maps-react';

class Contents extends Component {
    constructor(){
      super();

      this.state = {
        markers: [],
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow: false,
        place: null,
        position: null,
        // ///////// added filters
        womenFilter: false,
        petsFilter: false,
        transitFilter: false,
        menFilter: false,
        parkingFilter: false,
        acFilter: false,
        internetFilter: false,
        tvFilter: false,
        smokingFilter: false,
        mode_2: [
              {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
              {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
              },
              {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#a5b076'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#f5f1e6'}]
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#fdfcf8'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#f8c967'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#e9bc62'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#e98d58'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#db8555'}]
              },
              {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
              },
              {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#b9d3c2'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
              }
            ],
            mode_1: [
            {
              elementType: 'geometry',
              stylers: [
                {
                  color: '#242f3e'
                }
              ]
            }, {
              elementType: 'labels.text.stroke',
              stylers: [
                {
                  color: '#242f3e'
                }
              ]
            }, {
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#746855'
                }
              ]
            }, {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#d59563'
                }
              ]
            }, {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#d59563'
                }
              ]
            }, {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#263c3f'
                }
              ]
            }, {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#6b9a76'
                }
              ]
            }, {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#38414e'
                }
              ]
            }, {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [
                {
                  color: '#212a37'
                }
              ]
            }, {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#9ca5b3'
                }
              ]
            }, {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#746855'
                }
              ]
            }, {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [
                {
                  color: '#1f2835'
                }
              ]
            }, {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#f3d19c'
                }
              ]
            }, {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#2f3948'
                }
              ]
            }, {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#d59563'
                }
              ]
            }, {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#1F7491'
                }
              ]
            }, {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#3FB5B9'
                }
              ]
            }, {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [
                {
                  color: '#17263c'
                }
              ]
            }
          ],
          meetups: [{
            name: 'zober-home',
            position: { lat: 37.7576171, lng: -122.4976844 },
            icon: {
              url: 'http://localhost:3000/icon/z_coffee.png'
            }
           }, {
            name: 'zober-home',
            position: { lat: 37.7576171, lng: -122.4875824 },
            icon: {
              url: 'http://localhost:3000/icon/z_coffee.png'
            }
           }, {
            name: 'zober-home',
            position: { lat: 37.7876172, lng: -122.4776854 },
            icon: {
              url: 'http://localhost:3000/icon/z_coffee.png'
            }
           }, {
            name: 'zober-home',
            position: { lat: 37.7376171, lng: -122.4776874 },
            icon: {
              url: 'http://localhost:3000/icon/z_coffee.png'
            }
           }, {
            name: 'zober-home',
            position: { lat: 37.7476172, lng: -122.4776844 },
            icon: {
              url: 'http://localhost:3000/icon/z_coffee.png'
            }
          }, {
           name: 'zober-home',
           position: { lat: 37.7426171, lng: -122.4776874 },
           icon: {
             url: 'http://localhost:3000/icon/z_coffee.png'
           }
         }],
         styles: this.mode_1
      }

      this.onMarkerClick = this.onMarkerClick.bind(this);
      this.onMapClicked = this.onMapClicked.bind(this);
    }

    componentWillMount() {
      const { google, map } = this.props;

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
            content: {},
            icon: {
              url: 'http://localhost:3000/icon/z_house.png'
            }
          }

          for(let prop in house) {
            houseMarker.content[prop] = house[prop];
          }
          // conditional for filtering
          // if(this._filterHouses(house)){
          //   console.log(house);
          return houseMarker
          // }
        });

        this.setState({
          markers: homesList
        })

      });
    }

/////////////////filter function
  _filterHouses(house) {
    var isValid = true
    if(this.state.petsFilter === true && isValid){
      if(!house.pets) {
        isValid = false;
      }
    }

    if(this.state.transitFilter === true && isValid){
      if(!house.transportation) {
        isValid = false;
      }
    }

    if(this.state.womenFilter === true && isValid){
      if(house.gender !== "female") {
        isValid = false;
      }
    }

    if(this.state.menFilter === true && isValid){
      if(house.gender !== "male") {
        isValid = false;
      }
    }

    if(this.state.parkingFilter === true && isValid){
      if(!house.parking) {
        isValid = false;
      }
    }

    if(this.state.acFilter === true && isValid){
      if(!house.ac) {
        isValid = false;
      }
    }

    if(this.state.internetFilter === true && isValid){
      if(house.internet === "None") {
        isValid = false;
      }
    }

    if(this.state.tvFilter === true && isValid){
      if(house.tv !== "Flatscreen") {
        isValid = false;
      }
    }

    if(this.state.smokingFilter === true && isValid){
      if(house.smoking_policy === "No Smoking") {
        isValid = false;
      }
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
  }

  componentDidMount() {
    this.renderAutoComplete();
  }

  componentDidUpdate(prevProps) {
    const {google, map} = this.props;
    if (map !== prevProps.map) {
      this.renderAutoComplete();
    }
  }

  onMarkerClick(props, marker, e) {
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
      });
    }
  }

  renderAutoComplete() {

    const {google, map} = this.props;

    if (!google || !map) return;

    const aref = this.refs.autocomplete;
    const node = ReactDOM.findDOMNode(aref);
    var autocomplete = new google.maps.places.Autocomplete(node);
    autocomplete.bindTo('bounds', map);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        return;
      }

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(12);
      }

      this.setState({
        place: place,
        position: place.geometry.location
      })
    })
  }

  onToggleStyles(){
    this.setState({ styles: this.state.mode_2 })
  }

  render() {
    let content = undefined;

    const props = this.props;
    const {position} = this.state;

    return (
      <div className='map-resize'>
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              ref='autocomplete'
              type="text"
              placeholder="enter on autoComp" />
          </form>
          <div>
            <div>Lat: {position && position.lat()}</div>
            <div>Lng: {position && position.lng()}</div>
          </div>
        </div>
        <div>
          {/* <button onClick={ this.onToggleStyles.bind(this) }>Toggle Mode</button> */}
          <Map {...props}
              styles={ this.state.styles }
              containerStyle={{
                position: 'relative',
                height: '100vh',
                width: '100%'
              }}
              onClick={ this.state.onMapClicked }
              center={this.state.position}
              centerAroundCurrentLocation={false}>
          <Marker position={this.state.position} />
          {
            this.state.markers.map((m, i) => {
              return (
                  <Marker
                    key={ i }
                    content={ m.content }
                    onClick={ this.onMarkerClick }
                    name={ m.name }
                    position={ m.position }
                    icon={ m.icon }
                  />
                )
              })
            }
            {
              this.state.meetups.map((m, i) => {
                return (
                    <Marker
                      key={ i }
                      content={ m.content }
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
                <div className='card mb-2 box-shadow'>
                  <h1>Z-house: { this.state.selectedPlace.name }</h1>
                    { content = this.state.selectedPlace.content, console.log(content) }
                    { (content === undefined) ? '' :
                      (  <div className="card-body d-flex flex-column align-items-start">
                        <div className="mb-1 text-muted">last updated: ...</div>
                        <hr/>
                        <p><h4>Cost:</h4>{ content.price }</p>
                          <p><h4>Activities: </h4>{ content.activities  }</p>
                          <p><h4>Capacity: </h4>{ content.capacity }</p>
                          <p><h4>Gender: </h4>{ content.gender }</p>
                          <p><h4>Heating: </h4>{ content.heating }</p>
                          <p><h4>A/C: </h4>{ content.ac }</p>
                          <p><h4>hot-tub: </h4>{ content.hotttub }</p>
                          <p><h4>WiFi/internet: </h4>{ content.internet }</p>
                          <p><h4>Parking: </h4>{ content.parking }</p>
                          <p><h4>Pets: </h4>{ content.pets }</p>
                          <p><h4>Smoking: </h4>{ content.smoking_policy }</p>
                          <p><h4>Transportation: </h4>{ content.transportation }</p>
                        </div>)}

                </div>
              </InfoWindow>
          </Map>
        </div>
      </div>
    )
  }
}

export default class MapWrapper extends Component {
  constructor(props){
    super();

    this.state = {
      markers: [],
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow: false,
        markers: [],
       zoom: 12,
       center: {}
    }
  }

  render() {
    const props = this.props;
    const {google} = this.props;

    return (
      <Map google={google}
          className={'map'}
          visible={false}>
            <Contents {...props} />
      </Map>
    );
  }
}
