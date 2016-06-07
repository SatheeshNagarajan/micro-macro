
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

    if (repoType === "Internal") {
      var internalRepo = require("./internalRepo");
      return internalRepo;
    }

    if (repoType === "Extenal") {
      var externalRepo = require("./externalRepo");
      return externalRepo;
    }
  }
};

module.export = repoFactory();