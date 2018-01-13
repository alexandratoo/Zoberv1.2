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
      genderFilter: '',
      petsFilter: '',
      transitFilter: '',

    },

    mounted: function() {
    $.get('/api/v1/houses.json', function(result) {
       this.houses = result; 
    }.bind(this));

    },

    methods: {

      // filter: function(house) {
      //   return validPrice && validGender && validPets && validTransit
      // },

      setSortAttribute: function(inputAttribute) {
        if(inputAttribute !== this.sortAttribute) {
          this.sortAscending = true;
        } else {
          this.sortAscending = !this.sortAscending;
        }
         this.sortAttribute = inputAttribute;
      },

      formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
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

