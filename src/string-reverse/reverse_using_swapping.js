

var value = "Here is my own logic";
//var value = ['a', 'b', 'c', 'd', 'e'];

var increment = 0;

var decrement = value.length-1;

console.log("String length : "+decrement);

while(decrement >= 0) {
  var temp = value[decrement];
  value[decrement] = value[increment];
  value[increment] = temp;
  increment++;
  decrement--;
  if (increment == decrement){
    break;
  }
}

console.log(value);