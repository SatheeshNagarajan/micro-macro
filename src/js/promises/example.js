var promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Success");
  }, 1000);

  setTimeout(() => {
    reject("Failed");
  }, 5000);
});

promise.then(function (result) {
  console.log(result);
});

promise.catch(function (error) {
  throw new Error(error);
});