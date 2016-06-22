
var Car = function (data) {

  this.brand = data.brand;
  this.version = data.version;
  this.type = data.type;
  this.owner = data.owner;
  this.available = data.available;

};

Car.prototype.model = function () {
  this.available = true;
  console.log("Model : " + this.brand);
};

Car.prototype.select = function () {
  console.log("Selected car : " + this.brand);
};

module.exports = Car;
