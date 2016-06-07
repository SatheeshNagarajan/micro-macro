
var Car = require("./car");
var Repo = require("./carRepo")

var repo = Repo.get(27);

var carObj1 = new Car(repo);
var carObj2 = new Car({name: "BMW"});
var carObj3 = new Car({name: "Volvo"});
var carObj4 = new Car({name: "Nissan"});

carObj1.model();
carObj2.select();
carObj3.select();
carObj4.select();
