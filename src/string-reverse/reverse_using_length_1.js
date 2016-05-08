
var value = "India Chennai"


var x = value.length -1, y = 0;

var charArray = value.split('');

while(x > y) {
  var tempChar = charArray[y];
  charArray[y] = charArray[x];
  charArray[x] = tempChar;
  x--;
  y++;
}

console.log(charArray.join(''));