var CarService = require("./carService");

var commonService = function() {
  return {

    selectCar: function(car) {

      CarService.model(car);

      if(car.available) {
        CarService.setManufactureDate(car);
        CarService.select(car)
      }

    }
  }
}

module.exports = commonService();