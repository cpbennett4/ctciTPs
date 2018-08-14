const compressString = require('./stringCompression.js');

describe('compressString', () => {
  it('should exist', () => {
    const type = typeof compressString;
    expect(type).toBe('function');
  });

  it('should return -1 when passed anything other than a string', () => {
    let result = compressString({});
    expect(result).toBe(-1);

    result = compressString([]);
    expect(result).toBe(-1);

    result = compressString(true);
    expect(result).toBe(-1);
  });

  it('should return -2 if passed a string with invalid characters', () => {
    let result = compressString('aabbcc9dd');
    expect(result).toBe(-2);

    result = compressString('abb*bbeeccd$dd');
    expect(result).toBe(-2);

    result = compressString('abb bbeeccd$dd');
    expect(result).toBe(-2);
  });

  it('should return "a2b1c5a3" when passed "aabcccccaaa"', () => {
    let result = compressString('aabcccccaaa');
    expect(result).toBe('a2b1c5a3');
  });

  it('should return the original string if the compressed version is not shorter than the original', () => {
    let result = compressString('abcd');
    expect(result).toBe('abcd');
  });

  it('should be case sensitive', () => {
    let result = compressString('aabBBBbcccccaaa');
    expect(result).toBe('a2b1B3b1c5a3');
  });

  it('should return an empty string if passed an empty string', () => {
    let result = compressString('');
    expect(result).toBe('');
  });
});