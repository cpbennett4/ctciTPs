/*
  Implement a method to perform basic string compression using the counts of repeated characters.  For example, the string 'aabcccccaaa' would become a2b1c5a3.  If the "compressed" string would not become smaller than the original string, your method should return the original string.  You can assume the string has only uppercase and lowercase letters (a-z).
*/

const compressString = (string) => {
  // make sure input is string
  if (typeof string !== 'string') {
    return -1;
  }
  // return empty strings
  if (string === '') {
    return string;
  }
  // let a variable represent the current letter
  let currentLetter = string[0];
  // let a variable represent the current run of same letters
  let currentRun = 1;
  // let a variable hold the compressed string in progress
  let compressedString = '';
  // loop string
  for (let i = 1; i < string.length; i++) {
    // compare to regex to make sure its an upper or lower case letter
    if (!/[a-z]|[A-Z]/.test(string[i])) {
      return -2;
    }
    // if character at current index in string is the same as currentLetter
    if (string[i] === currentLetter) {
      // incrament currentRun
      currentRun++;
    } else { // else
      // if i is not last index value
      if (i !== string.length - 1) {
        // concat currentLetter with compressedString
        compressedString += currentLetter;
        // concat currentRun with compressedString
        compressedString += currentRun;
        // change currentLetter to letter at current index of string
        currentLetter = string[i];
        // change currentRun to 1
        currentRun = 1;
      }
    }
    // if i is last index
    if (i === string.length - 1) {
      // concat currentLetter with compressedString
      compressedString += currentLetter;
      // concat currentRun with compressedString
      compressedString += currentRun;
    }
  }
  // if the length of the compressed string is longer than original
  if (compressedString.length > string.length) {
    // return original string
    return string;
  } else { // else
    // return compressed string
    return compressedString;
  }
};

module.exports = compressString;