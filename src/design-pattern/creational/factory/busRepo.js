

var busRepo = function() {

  return {

    get: function(id) {
      console.log("Retriving bus " + id);
      return {
        brand: "new Bus"
      }
    },

    select: function(bus) {
      console.log("Selected bus : " + bus.brand + " from Bus repo");
    }
  }
}

module.exports = busRepo();