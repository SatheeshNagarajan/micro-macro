

var bikeRepo = function() {

  return {

    get: function(id) {
      console.log("Retriving bike " + id);
      return {
        brand: "new bike"
      }
    },

    select: function(bike) {
      console.log("Selected bike : " + bike.brand + " from Bike repo");
    }
  }
}

module.exports = bikeRepo();