
var Car = require("./car");
var repoFactory = require("./repoFactory");


var carObj1 = new Car(repoFactory.getRepo("Car").get(1));
var carObj2 = new Car(repoFactory.getRepo("Car").get(2));

var internalObj = new Car(repoFactory.getRepo("Internal").get(1));

var externalObj = new Car(repoFactory.getRepo("External").get(1));