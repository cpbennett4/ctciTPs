/*
  Prompt: Given a string, write a function to check if it is a permutation of a palindrome.  A palindrome is a word or prhase that is the same forwards and backwards.  A permutation is a rearrangement of letters.  The palindrome does not need to be limited to just dictionary words.

  Example:
    palindromePermutation('Tact Coa') => true (permutations: 'taco cat', 'atco cta', etc.)
*/

const palindromePermutation = (string) => {
  // handle edge cases
  if (!string || typeof string !== 'string') {
    return -1;
  }

  // set all letters to lowerCase
  string = string.toLowerCase();

  // create object to hold letter counts
  const letters = {};

  // fill letters with letter counts
  for (let i = 0; i < string.length; i++) {
    // if the letter isn't in letters, initialize to 1, else incrament
    letters[string[i]] ? letters[string[i]]++ : letters[string[i]] = 1;
  }

  // remove spaces from letters object
  delete letters[' '];

  // create varible to hold number of odd occuring letters to confirm that it is one
  const odds = [];

  // find odds in object
  for (let letter in letters) {
    if(letters[letter] % 2 !== 0) {
      odds.push(letters[letter]);
    }
  }

  // make sure there is 1 odd letter at most and it is one
  if (odds.length > 1 || (odds[0] && odds[0] !== 1)) {
    return false;
  } else {
    return true;
  }
};

module.exports = palindromePermutation;