/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      houses: []
    },

    mounted: function() {
    $.get('/api/v1/houses.json', function(result) {
       this.houses = result; 
    }.bind(this));

    },

    methods: {
      formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      }
    },

    computed: {

    }
 });
});

