
var Car = function (data) {

  this.brand = data.brand;
  this.available = false;

};

Car.prototype.model = function () {
  this.available = true;
  console.log("Model : " + this.brand);
};

Car.prototype.select = function () {
  console.log("Selected Vehicle : " + this.brand);
};

module.exports = Car;
