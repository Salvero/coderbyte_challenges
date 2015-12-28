// Simple Symbols

// Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed
// and determine if it is an acceptable sequence by either returning the string true or false. The str parameter
// will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string
// to be true each letter must be surrounded by a + symbol. So the string to the left would be false.
// The string will not be empty and will have at least one letter.

function SimpleSymbols(str) {

  // convert string to lowercase and split
  var arr = str.toLowerCase().split('');

  // loop through each letter in array
  for (var i = 0; i < arr.length; i++) {

    // if first character or last chracter is between a-z then return false
    if (arr[i] >= 'a' && arr[i] <= 'z') {
      if (i === 0 || i === arr.length) {
        return false;
      }

      // if character is string then check if letter before and after is + and if not then return false
      if ( arr[i-1] !== "+" || arr[i+1] !== "+" ) {
        return false;
      }
    }
  }

  return true;

}

SimpleSymbols('Argument goes here');

// false