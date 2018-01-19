import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const contentString = `
'<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Sober on the Coast</h1>'+
    '<div id="bodyContent">'+
    '<br><a style="color: orange; font-size: 4rem;" href="zober.co">zober.co</a>'+
    '<p><b>Company:</b> Zober LLC' +
    '(303)445-2114'+
    '<p>Bacon ipsum dolor amet spare ribs fatback short loin cow picanha.'+
    ' Prosciutto tri-tip flank, rump shankle burgdoggen filet mignon t-bone strip steak tongue shank. '+
    'Heritage Site.</p>'+

    '<p>Attribution: Uluru, <a style="color: orange;" href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited Jan 19, 2018).</p>'+
    '</div>'+
    '</div>'

`;

export default class HouseMap extends Component {
  constructor(){
    super();
    this.state = {
      markers: [{
        name: 'zober-home',
        position: { lat: 37.7576171, lng: -122.4976844 },
        content: contentString,
        icon: {
          url: 'http://localhost:3000/icon/z_house.png',
          anchor: new google.maps.Point(32,32),
          scaledSize: new google.maps.Size(64,64)
        }
       }, {
        name: 'zober-home',
        position: { lat: 37.7576171, lng: -122.4875824 },
        content: contentString,
        icon: {
          url: 'http://localhost:3000/icon/z_house.png',
          anchor: new google.maps.Point(32,32),
          scaledSize: new google.maps.Size(64,64)
        }
       }, {
        name: 'zober-home',
        position: { lat: 37.7876172, lng: -122.4776854 },
        content: contentString,
        icon: {
          url: 'http://localhost:3000/icon/z_house.png',
          anchor: new google.maps.Point(32,32),
          scaledSize: new google.maps.Size(64,64)
        }
       }, {
        name: 'zober-home',
        position: { lat: 37.7376171, lng: -122.4776874 },
        content: contentString,
        icon: {
          url: 'http://localhost:3000/icon/z_house.png',
          anchor: new google.maps.Point(32,32),
          scaledSize: new google.maps.Size(64,64)
        }
       }, {
        name: 'zober-home',
        position: { lat: 37.7476172, lng: -122.4776844 },
        content: contentString,
        icon: {
          url: 'http://localhost:3000/icon/z_coffee.png',
          anchor: new google.maps.Point(32,32),
          scaledSize: new google.maps.Size(64,64)
        }
      }, {
       name: 'zober-home',
       position: { lat: 37.7426171, lng: -122.4776874 },
       content: contentString,
       icon: {
         url: 'http://localhost:3000/icon/z_scroll.png',
         anchor: new google.maps.Point(32,32),
         scaledSize: new google.maps.Size(64,64)
       }
     }],
     zoom: 14,
     center: [37.7576171,-122.4875824],
    }
  }
  render() {
    return (
      <div>
        <Map google={window.google}
          zoom={this.state.zoom}>

          {
            this.state.markers.map((m) => {
              return (
                <Marker
                  name={'Your position'}
                  position={ m.position }
                  icon={{
                    url: "http://localhost:3000/icon/z_scroll.png",
                    anchor: new google.maps.Point(32,32),
                    scaledSize: new google.maps.Size(64,64)
                  }} />)

                })
            }

        </Map>
      </div>
    );
  }
}
