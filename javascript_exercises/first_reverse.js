// First Reverse

// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

function FirstReverse(str) {

  var newString = '';

  for (var x = str.length - 1; x >= 0; x--) {
    // add each character to newString
    newString = newString + str.charAt(x);
  }

  return newString;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down

FirstReverse('Argument goes here');
