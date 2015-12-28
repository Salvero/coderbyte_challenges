// Letter Changes

// Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed
// and modify it using the following algorithm. Replace every letter in the string with the letter following
// it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u)
// and finally return this modified string.

function LetterChanges(str) {

  // create alphabet string that contains all letters
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var newString = '';
  var localWords;

  // loop through each letter in the string
  for (var i = 0; i < str.length; i++) {
    localWords = alphabet.indexOf(str[i]);
    if (localWords === 25) {
      newString = newString + 'a';
    } else if (localWords === -1) {
      newString = newString + str[i];
    } else {
      newString = newString + alphabet[localWords + 1];
    }
  }

  // return next character in the alphabet string
  // replace all vowels with upper case with a RegEx replace() function
  return newString.replace(/[aeiou]/g, function(letter) {
    return letter.toUpperCase();
  });
}

LetterChanges('New characters one at a time');
