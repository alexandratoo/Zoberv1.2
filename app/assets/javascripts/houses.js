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
});

