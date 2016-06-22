// Used to create new objects with their own object scope

var Car = function (brand) {

  this.brand = brand;
  this.available = false;

};

Car.prototype.model = function () {
  this.available = true;
  console.log("Model : " + this.brand);
};

Car.prototype.select = function () {
  console.log("Selected car : " + this.brand);
};

module.exports = Car;
