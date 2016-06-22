
var Repo = require("./carRepo");

var Car = function (data) {

  this.brand = data.name;
  this.available = false;

};

Car.prototype.model = function () {
  this.available = true;
  console.log("Model : " + this.brand);
};

Car.prototype.select = function () {
  console.log("Selected car : " + this.brand);
  Repo.select(this);
};

module.exports = Car;
