

var internalRepo = function() {

  return {

    get: function(id) {
      console.log("Retriving internal car " + id);
      return {
        name: "new Car from internal repo"
      }
    },

    select: function(car) {
      console.log("Selected car " + car.brand + " from internal repo");
    }
  }
}

module.exports = internalRepo();