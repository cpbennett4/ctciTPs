/*
  Prompt: Write a function to replace all spaces in a string with '%20'

  Example: 'Mr John Smith' => 'Mr%20John%20Smith'
*/

const URLify = (string) => {
  // handle edge cases
  if (!string || typeof string !== 'string') {
    return -1;
  }

  // create variable to break while loop
  let moreSpaces = true;

  // make copy of string to work with
  let newString = string.slice(0);

  // continue space replacement until no more spaces
  while (moreSpaces) {
    for (var i = 0; i < newString.length; i++) {
      if (newString[i] === ' ') {
        newString = newString.replace(' ', '%20');
      }
      if (i === newString.length - 1 && i !== ' ') {
        moreSpaces = false;
      }
    }
  }

  // return newString
  return newString;
}



module.exports = URLify;