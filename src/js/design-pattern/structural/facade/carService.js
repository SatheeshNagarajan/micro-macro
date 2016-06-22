

var CarService = function () {

  return {

    model: function (car) {
      car.available = true;
      console.log("Car : " + car.brand);
    },

    setManufactureDate: function (car) {
      car.manufacturedDate =  new Date();
      console.log(car.brand + " manufactured on " + car.manufacturedDate);
    },

    select: function(car) {
      console.log("Selected car :" + car.brand);
    }
  }
}

module.exports = CarService();