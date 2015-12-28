// Letter Capitalize

// Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter
// being passed and capitalize the first letter of each word. Words will be separated by only one space.

function LetterCapitalize(str) {

  var stringArray = str.split('');
  var newString = [];

  for (var i = 0; i < stringArray.length; i++) {
    newString.push(stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1));
  }

  return newString.join('');
}

LetterCapitalize('i ran there to find balls!');

// 'I RAN THERE TO FIND BALLS!'
