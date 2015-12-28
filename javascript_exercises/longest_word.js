// Longest Word

// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word
// in the string. If there are two or more words that are the same length, return the first word from
// the string with that length. Ignore punctuation and assume sen will not be empty.

function LongestWord(sen) {

  var words = sen.replace(/[^a-zA-Z\s]/g, '').split(' ');
  var LongestWord = words.reduce ( function( longestSoFar, currentWord) {

    return currentWord.length > longestSoFar.length ? currentWord : longestSoFar;
  }, '');

  return LongestWord;
}

LongestWord('Argument goes here');

// Argument
