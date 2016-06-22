

var value = "Nice to meet you";

var result = [];

var i = 0;
var j = value.length-1;

while(i <= j) {

  result[j] = value[i];
  result[i] = value[j];
  i++;
  j--;

}
console.log(result.join(''));
