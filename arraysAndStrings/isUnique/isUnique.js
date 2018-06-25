/*
  Prompt: Implement an algorithm to determine if a string has all unique characters.  What if you cannot use additional data structures?
*/

const isUnique = (string) => {
  // handle edge cases
  if (!string) {
    return -1;
  }

  if (typeof string !== 'string') {
    return -1;
  }

  if (string.length < 2) {
    return true;
  }

  // initialize solution to true
  let solution = true;

  // loop each letter in the string
  for (var i = 0; i < string.length; i++) {
    // loop each letter in the string again
    for (var j = 0; j < string.length; j++) {
      // if the index of the inner loop isn't the same as the outer loop
      if (i !== j) {
        // if the letters are the same
        if (string[i] === string[j]) {
          // return false
          return false;
        }
      }
    };
  };

  // return solution if the interpreter has made it this far
  return solution;
}

module.exports = isUnique;