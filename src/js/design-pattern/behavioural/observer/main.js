
var Car = require("./car");

var notificationService = function() {

  var message = "Notifying ";
  this.update = function (car) {
    console.log(message + car.owner + " for car " + car.brand);
  }
}

var loggingService = function() {

  var message = "Logging ";
  this.update = function (car) {
    console.log(message + car.owner + " for car " + car.brand);
  }
}

var bookingService = function() {

  var message = "Booking ";
  this.update = function (car) {
    console.log(message + car.owner + " for car " + car.brand);
  }
}

function ObserverList() {
  this.observerList = [];
};

ObserverList.prototype.add = function(obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.get = function(index) {
  if (index > 0 && index < this.observerList.length) {
    return this.observerList[index];
  }
};


var observableCar = function(data) {
  Car.call(this, data);
  this.observers = new ObserverList();
};

observableCar.prototype.addObserver = function(observer) {
  this.observers.add(observer);
};

observableCar.prototype.notify = function(context) {
  var observerCount = this.observers.length;

  for(var i=0; i<observerCount; i++){
    this.observers.get(i)(context);
  }
};


observableCar.prototype.select = function() {
  this.notify(this);
  Car.prototype.select.call(this);
};

const obj = {brand: "Maruthi", owner: "John" };
var carObj1 = new observableCar(obj);

var notification = new notificationService();
var logging = new loggingService();
var booking = new bookingService();

carObj1.addObserver(notification.update(obj));
carObj1.addObserver(logging.update(obj));
carObj1.addObserver(booking.update(obj));

carObj1.select();