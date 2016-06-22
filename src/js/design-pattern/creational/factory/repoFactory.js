
var repoFactory = function() {

  this.getRepo = function(repoType) {

    if (repoType === 'Car') {
      if (this.carRepo){
        console.log("Retriving from cache");
        return this.carRepo;
      }
      else{
        this.carRepo = require("./carRepo");
        return this.carRepo;
      }
    }

    if (repoType === "Bike") {
      var internalRepo = require("./busRepo");
      return internalRepo;
    }

    if (repoType === "Bus") {
      var externalRepo = require("./bikeRepo");
      return externalRepo;
    }
  }
};

module.exports = repoFactory;