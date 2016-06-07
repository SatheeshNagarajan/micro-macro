

var externalRepo = function() {

  return {

    get: function(id) {
      console.log("Retriving external car " + id);
      return {
        name: "new Car from external repo"
      }
    },

    select: function(car) {
      console.log("Selected car " + car.brand + " from external repo");
    }
  }
}

module.exports = externalRepo();