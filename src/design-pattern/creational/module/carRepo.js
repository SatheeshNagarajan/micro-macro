
var repo = function() {

  return {

    get: function(id) {
      console.log("Retriving car " + id);
      return {
        name: "new Car from repo"
      }
    },

    select: function(car) {
      console.log("Selected car " + car.brand + " from repo");
    }
  }
}

module.exports = repo;