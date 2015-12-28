// Alphabet Soup

// Using the JavaScript language, have the function AlphabetSoup(str) take the str string
// parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo).
// Assume numbers and punctuation symbols will not be included in the string.

function AlphabetSoup(str) {
  // string should be split first and then sort before join them.
  return str.split('').sort().join('');
}

AlphabetSoup('Argument goes here');
