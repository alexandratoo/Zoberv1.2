/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) {

  const store = new Vuex.Store({
    actions: {
      getHouses() {
        return new Promise((resolve, reject) => {
          axios.get('/api/v1/houses.json')
            .then(response => resolve(response))
            .catch(err => reject(error))
        });
      }
    }
  })


  var app = new Vue({
    el: '#app',
    data: {
     houses: [],
     sortAttribute: 'name',
     sortAscending: true,
     priceFilter: '',
     distanceFilter: '',
     femaleFilter: false,
     maleFilter: false,
     coedFilter: false,
     parkingFilter: false,
     internetFilter: false,
     poolFilter: false,
     adultFilter: false,
     youthFilter: false,
     seniorFilter: false,
     hottubFilter: false,
     laundryFilter: false,
     dogsFilter: false,
     catsFilter: false,
     smokingFilter: false,
     vapingFilter: false
   },

     mounted: function() {
     $.get('/api/v1/houses.json', function(result) {
        this.houses = result;
     }.bind(this));

     },

     methods: {
       filterHouses: function(house) {
         // define filter array
         var filterArray = house.filters.map(function (filter) {
         return filter.filter;
         });
         var isValid = true;

         if(this.catsFilter === true && isValid){
           if(!filterArray.includes("Cats")) {
             isValid = false;
           }
         }

         if(this.dogsFilter === true && isValid){
           if(!filterArray.includes("Dogs")) {
             isValid = false;
           }
         }

         if(this.femaleFilter === true && isValid){
           if(!filterArray.includes("Female")) {
             isValid = false;
           }
         }

         if(this.maleFilter === true && isValid){
           if(!filterArray.includes("Male")) {
             isValid = false;
           }
         }

         if(this.coedFilter === true && isValid){
           if(!filterArray.includes("Coed")) {
             isValid = false;
           }
         }

         if(this.parkingFilter === true && isValid){
           if(!filterArray.includes("Parking")) {
             isValid = false;
           }
         }

         if(this.internetFilter === true && isValid){
           if(!filterArray.includes("Internet (wi-fi)")) {
             isValid = false;
           }
         }

         if(this.smokingFilter === true && isValid){
           if(!filterArray.includes("Smoking Allowed in Designated Areas")) {
             isValid = false;
           }
         }

         if(this.vapingFilter === true && isValid){
           if(!filterArray.includes("Vaping Allowed in Designated Areas")) {
             isValid = false;
           }
         }

         if(this.poolFilter === true && isValid){
           if(!filterArray.includes("Pool")) {
             isValid = false;
           }
         }

         if(this.adultFilter === true && isValid){
           if(!filterArray.includes("Adult (18+)")) {
             isValid = false;
           }
         }

         if(this.youthFilter === true && isValid){
           if(!filterArray.includes("Youth")) {
             isValid = false;
           }
         }

         if(this.seniorFilter === true && isValid){
           if(!filterArray.includes("Senior(65+)")) {
             isValid = false;
           }
         }

         if(this.hottubFilter === true && isValid){
           if(!filterArray.includes("Hot Tub")) {
             isValid = false;
           }
         }

         if(this.laundryFilter === true && isValid){
           if(!filterArray.includes("Laundry Onsite")) {
             isValid = false;
           }
         }

         return isValid;
       },

       setSortAttribute: function(inputAttribute) {
         if(inputAttribute !== this.sortAttribute) {
           this.sortAscending = true;
         } else {
           this.sortAscending = !this.sortAscending;
         }
          this.sortAttribute = inputAttribute;
       },

       formatPrice: function(value) {
         let val = (value/1).toFixed(2)
         return val;
       }
     },

     computed: {
       modifiedHouses: function() {
         return this.houses.sort(function(house1, house2) {
           if (this.sortAscending) {
             return house1[this.sortAttribute].localeCompare(house2[this.sortAttribute]);
           } else {
             return house2[this.sortAttribute].localeCompare(house1[this.sortAttribute]);
           }
          }.bind(this));
       }

     }
  });


Vue.component('vue-map', {
  template: '#map',
  props: {
    markers: {
      type: Array,
      default: []
    },
    option: {
      type: Object,
      default: {
        zoom: 16,
        center: {lat: -34.397, lng: 150.644},
      }
    }
  },
  data: function() {
    return {
      map: {}
    }
  },
  mounted: function() {
    let el = this.$el;
    let bounds = new google.maps.LatLngBounds();

    this.map = new google.maps.Map(el, this.option);

    for (let i = 0; i < this.markers.length; i++) {
      let position = new google.maps.LatLng(this.markers[i].lat, this.markers[i].lng);
      bounds.extend(position);
      this.setMarker(this.markers[i]);
    }

    this.map.fitBounds(bounds);
  },
  methods: {
    // set marker
    // @param {Object} pos
    setMarker(pos) {
      let latlng = new google.maps.LatLng(pos.lat, pos.lng);
      let marker = new google.maps.Marker({
        position: latlng,
        map: this.map,
        title: pos.title
      })
      let infoWindow = new google.maps.InfoWindow();
      infoWindow.setContent('<div class="map__info">' + pos.description + '</div>');

      // Setup event for marker
      google.maps.event.addListener(marker, 'mouseover', () => {
        infoWindow.open(this.map, marker);
      });

      google.maps.event.addListener(marker, 'mouseout', () => {
        infoWindow.close(this.map, marker);
      });

      google.maps.event.addListener(marker, 'click', () => {
        console.log("abc");
      });
    }
  }
})


let vm = new Vue({
  store,
  el: '#mapp',
  data: {
    homes: {},
    
    locations: [{
      title: 'Location A',
      lat: 37.769436,
      lng: -122.447662,
      description: 'this is location A',
    }, {
      title: 'Location B',
      lat: 37.780097,
      lng: -122.462605,
      description: 'this is Location B',
    }, {
      title: 'Location C',
      lat: 37.758797,
      lng: -122.485128,
      description: 'this is Location C',
    }, {
      title: 'Location E',
      lat: 37.774929,
      lng: -122.419416,
      description: 'this is Location E',
    }, {
      title: 'Location D',
      lat: 37.736220,
      lng: -122.459338,
      description: 'this is Location D',
    }]
  },

    created () {
      this.$store.dispatch('getHouses').then(res => {
        this.homes = res.data[0]
        console.log(this.homes)
      })
    }

  });


});

