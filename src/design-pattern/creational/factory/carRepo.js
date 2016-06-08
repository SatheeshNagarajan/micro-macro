
var repo = function() {

  return {

    get: function(id) {
      console.log("Retriving car " + id);
      return {
        brand: "new Car"
      }
    },

    select: function(car) {
      console.log("Selected car : " + car.brand + " Car repo");
    }
  }
}

module.exports = repo();