/*
  Prompt: Given two strings, write a method to decide if one is a permutation of the other.

  A permutation is a rearranging of something.  For example, 'llheo' is one permutation of 'hello'.
*/

const checkPermutation = (string1, string2) => {
  // handle edge cases
  if (arguments.length === 2 ||
      typeof string1 !== 'string' ||
      typeof string2 !== 'string'
     ) {
    return -1;
  }

  // create objects to hold character count of strings
  const string1Counts = {};
  const string2Counts = {};

  // fill string1Counts
  for (let i = 0; i < string1.length; i++) {
    // if the letter hasn't been seen yet, initialize to 1, else incrament
    string1Counts[string1[i]] ? string1Counts[string1[i]]++ : string1Counts[string1[i]] = 1;
  }

  // fill string2Counts
  for (let i = 0; i < string2.length; i++) {
    // if the letter hasn't been seen yet, initialize to 1, else incrament
    string2Counts[string2[i]] ? string2Counts[string2[i]]++ : string2Counts[string2[i]] = 1;
  }

  // loop string1Counts while confirming same in string2Counts
  for (let letter in string1Counts) {
    if (string1Counts[letter] !== string2Counts[letter]) {
      return false
    }
  }

  // return true if it gets this far
  return true;
};

module.exports = checkPermutation;