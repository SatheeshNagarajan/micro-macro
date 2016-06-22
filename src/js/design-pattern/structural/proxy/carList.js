

var CarList = function () {
  // CarList, which is used to maintaining details
};

CarList.prototype.getCar = function (name) {
  console.log("Getting car : " + name);
};

CarList.prototype.search = function (name) {
  console.log("Searching car : " + name);
};

CarList.prototype.addCar = function (name) {
  console.log("Adding car : " + name);
};


var CarListProxy = function () {
  this.carList = new CarList();
};

CarListProxy.prototype.getCar = function (name) {
  return this.carList.getCar(name);
};

CarListProxy.prototype.search = function (name) {
  if(name === "Volvo") {
    console.log("You do not have access to search car");
  }else{
    return this.carList.search(name);
  }
};

CarListProxy.prototype.addCar = function (name) {
  return this.carList.addCar(name);
};

var obj = new CarListProxy();

obj.getCar("Maruthi");
obj.search("Volvo");
obj.addCar("BMW");

