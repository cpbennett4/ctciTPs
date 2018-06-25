const checkPermutation = require('./checkPermutation.js');

describe('checkPermutation', () => {
  it('should exist', () => {
    const type = typeof checkPermutation;
    expect(type).toBe('function');
  });

  it('should accept two arguments', () => {
    expect(checkPermutation).toHaveLength(2);
  });

  it('should return -1 if not passed 2 strings', () => {
    expect(checkPermutation()).toBe(-1);
    expect(checkPermutation('hello')).toBe(-1);
    expect(checkPermutation('hello', 9)).toBe(-1);
    expect(checkPermutation(9, 'hello')).toBe(-1);
  });

  it('should return true if passed "llheo" and "hello"', () => {
    expect(checkPermutation('llheo', 'hello')).toBe(true);
  });

  it('should return true if passed "lhelo" and "hello"', () => {
    expect(checkPermutation('lhelo', 'hello')).toBe(true);
  });

  it('should return true if passed "llheo wodlr" and "hello world"', () => {
    expect(checkPermutation('llheo wodlr', 'hello world')).toBe(true);
  });

  it('should return false if passed "llheo " and "hello"', () => {
    expect(checkPermutation('llheo ', 'hello')).toBe(false);
  });

  it('should return false if passed "llheo wolrd" and " hello world"', () => {
    expect(checkPermutation('llheo wolrd', ' hello world')).toBe(false);
  });
});