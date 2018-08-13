/*
  Prompt: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.  Given two strings, write a function to check if they are one edit (or zero edits) away.

  Examples:
    pale, ple => true
    pales, pale => true
    pale, bale => true
    pale, bake => false
*/

const isOneAway = (string1, string2) => {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return -1;
  }
  // let a variable represent the delta in length of two strings
  let delta = Math.abs(string1.length - string2.length);
  // let a variable represent the longer of the two strings
  let longerString;
  // let a variable represent the shorter of the two strings
  let shorterString;
  // create copy of string1
  let str1Copy = string1.slice(0);
  // create copy of string2
  let str2Copy = string2.slice(0);
  // if delta is greater than 1
  if (delta > 1) {
    // return false
    return false;
  } else if (delta === 0) { // if delta is 0
    // loop first string
    for (let i = 0; i < str1Copy.length; i++) {
      // if character at i is different between two strings
      if (str1Copy[i] !== str2Copy[i]) {
        // change string2's i to string1's i
        str2Copy = str2Copy.replace(str2Copy[i], str1Copy[i]);
        // return strict comparision of 2 strings
        return str1Copy === str2Copy;
      }
    }
  } else if (delta === 1) { // else if delta is 1
    // set longerString & shorterString
    longerString = str1Copy.length > str2Copy.length ? str1Copy : str2Copy;
    shorterString = str1Copy.length > str2Copy.length ? str2Copy : str1Copy;
    // loop longer of 2 strings
    for (let i = 0; i < longerString.length; i++) {
      // if character at i is different
      if (longerString[i] !== shorterString[i]) {
        // insert longer string's character at i into shorter string at i
        shorterString = shorterString.slice(0, i) + longerString[i] + shorterString.slice(i);
        // return strict comparison of 2 strings
        return longerString === shorterString;
      }
    }
  } else { // else
    // return false
    return false;
  }
};

module.exports = isOneAway;