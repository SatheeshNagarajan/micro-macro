
var Car = function (brand) {

  this.brand = brand;
  this.available = false;

};

Car.prototype.model = function () {
  this.available = true;
  console.log("Car : " + this.brand);
};

Car.prototype.select = function () {
  console.log("Selected car : " + this.brand);
};

var myCar = new Car("Audi");
myCar.model();
myCar.select();


var myCar1 =  new Car("Volvo");

myCar1.notify = function() {
  console.log("notifying all people");
}

myCar1.notify();
myCar1.model();
myCar1.select = function() {
  this.notify();
  Car.prototype.select.call(this);
}

myCar1.select();
