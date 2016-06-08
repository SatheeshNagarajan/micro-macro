
var Car = require("./car");
var repoFactory = require("./repoFactory");


var RepoFactory = new repoFactory();


var carObj1 = new Car(RepoFactory.getRepo("Car").get(1));
var carObj2 = new Car(RepoFactory.getRepo("Car").get(2));

var bikeObj = new Car(RepoFactory.getRepo("Bike").get(1));

var busObj = new Car(RepoFactory.getRepo("Bus").get(1));


carObj1.select();
carObj2.select();
bikeObj.select();
busObj.select();
