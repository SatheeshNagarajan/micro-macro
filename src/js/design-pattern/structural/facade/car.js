
var CarServiceWrapper = require("./commonService");

var Car = function (data) {

  this.brand = data.brand;
  this.version = data.version;
  this.type = data.type;
  this.available = data.available;

}

var myCar = new Car({

  brand: "Nissan",
  version: 2,
  type: 2016,
  available: false

});

CarServiceWrapper.selectCar(myCar);

console.log(myCar)
