const palindromePermutation = require('./palindromePermutation.js');

describe('palindromePermutation', () => {
  it('should exist', () => {
    const type = typeof palindromePermutation;
    expect(type).toBe('function');
  });

  it('should accept one argument', () => {
    expect(palindromePermutation).toHaveLength(1);
  });

  it('should return -1 if not passed an argument', () => {
    expect(palindromePermutation()).toBe(-1);
  });

  it('should return -1 if not passed a string', () => {
    expect(palindromePermutation(9)).toBe(-1);
    expect(palindromePermutation([])).toBe(-1);
    expect(palindromePermutation({})).toBe(-1);
  });

  it('should return true when passed "Tact Coa"', () => {
    expect(palindromePermutation('Tact Coa')).toBe(true);
  });

  it('should return true when passed "T  "', () => {
    expect(palindromePermutation('T  ')).toBe(true);
  });

  it('should return true when passed "T t "', () => {
    expect(palindromePermutation('T t ')).toBe(true);
  });

  it('should return true when passed "racecar"', () => {
    expect(palindromePermutation('racecar')).toBe(true);
  });

  it('should return true when passed "cecarra"', () => {
    expect(palindromePermutation('cecarra')).toBe(true);
  });

  it('should return false when passed "ceccarra"', () => {
    expect(palindromePermutation('ceccarra')).toBe(false);
  });
});