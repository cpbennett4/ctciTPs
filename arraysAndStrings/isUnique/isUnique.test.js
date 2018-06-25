const isUnique = require('./isUnique.js');

describe('isUnique', () => {
  it('should exist', () => {
    const type = typeof isUnique;
    expect(type).toBe('function');
  });

  it('should accept one argument', () => {
    expect(isUnique).toHaveLength(1);
  });

  it('should return -1 if not given an argument', () => {
    expect(isUnique()).toBe(-1);
  });

  it('should return -1 if argument passed is not a string', () => {
    expect(isUnique(9)).toBe(-1);
    expect(isUnique({})).toBe(-1);
    expect(isUnique(true)).toBe(-1);
  });

  it('should return false when passed the string "hello"', () => {
    expect(isUnique('hello')).toBe(false);
  });

  it('should return true when passed an empty string', () => {
    expect(isUnique(' ')).toBe(true);
  });

  it('should return false when passed the string "abcdefghh"', () => {
    expect(isUnique('abcdefghh')).toBe(false);
  });

  it('should return true when passed the string "abcdefghijklmnopqrstuvwxyz1234567890"', () => {
    expect(isUnique('abcdefghijklmnopqrstuvwxyz1234567890')).toBe(true);
  });
});