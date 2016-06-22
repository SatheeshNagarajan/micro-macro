

var Iterator = function (items) {
  this.index = 0;
  this.items = items;
}

Iterator.prototype.first = function () {
  this.reset();
  return this.next();
};

Iterator.prototype.next = function () {
  return this.items[this.index++];
};

Iterator.prototype.hasNext = function () {
  return this.index <= this.items.length
};

Iterator.prototype.reset = function () {
  this.index = 0;
};


function run() {
  var items = ["one", 2, "three", true, "four"];
  var iterator = new Iterator(items);

  for (var item = iterator.first(); iterator.hasNext(); item = iterator.next()) {
    console.log(item);
  }

}

run();