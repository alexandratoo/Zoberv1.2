/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      houses: [],
      sortAttribute: 'name',
      sortAscending: true,
      priceFilter: '',
      distanceFilter: '',
      womenFilter: false,
      petsFilter: false,
      transitFilter: false,
      menFilter: false,
      parkingFilter: false,
      acFilter: false,
      internetFilter: false,
      tvFilter: false,
      smokingFilter: false
    },

    mounted: function() {
    $.get('/api/v1/houses.json', function(result) {
       this.houses = result; 
    }.bind(this));

    },

    methods: {

      filterHouses: function(house) {
        var isValid = true
        if(this.petsFilter === true && isValid){
          if(!house.pets) {
            isValid = false;
          }
        }

        if(this.transitFilter === true && isValid){
          if(!house.transportation) {
            isValid = false;
          }
        }

        if(this.womenFilter === true && isValid){
          if(house.gender !== "female") {
            isValid = false;
          }
        }

        if(this.menFilter === true && isValid){
          if(house.gender !== "male") {
            isValid = false;
          }
        }

        if(this.parkingFilter === true && isValid){
          if(!house.parking) { 
            isValid = false;
          }
        }

        if(this.acFilter === true && isValid){
          if(!house.ac) {
            isValid = false;
          }
        }

        if(this.internetFilter === true && isValid){
          if(house.internet === "None") { 
            isValid = false;
          }
        }

        if(this.tvFilter === true && isValid){
          if(house.tv !== "Flatscreen") {
            isValid = false;
          }
        }

        if(this.smokingFilter === true && isValid){
          if(house.smoking_policy === "No Smoking") {
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
});

