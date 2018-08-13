const isOneAway = require('./oneAway.js');

describe('isOneAway', () => {
  it('should exist', () => {
    const type = typeof isOneAway;
    expect(type).toBe('function');
  });

  it('should return a boolean', () => {
    // true case
    const trueReturnValueType = typeof isOneAway('abc', 'abd');
    expect(trueReturnValueType).toBe('boolean');
    // false case
    const falseReturnValueType = typeof isOneAway('abc', 'def');
    expect(falseReturnValueType).toBe('boolean');
  });

  it('should return true when passed "pale" and "ple"', () => {
    const result = isOneAway('pale', 'ple');
    expect(result).toBe(true);
  });

  it('should return true when passed "pales" and "pale"', () => {
    const result = isOneAway('pales', 'pale');
    expect(result).toBe(true);
  });

  it('should return true when passed "pale" and "bale"', () => {
    const result = isOneAway('pale', 'bale');
    expect(result).toBe(true);
  });

  it('should return true when passed "hello" and "helxlo"', () => {
    const result = isOneAway('hello', 'helxlo');
    expect(result).toBe(true);
  });

  it('should return false when passed "pale" and "bake"', () => {
    const result = isOneAway('pale', 'bake');
    expect(result).toBe(false);
  });

  it('should return false when passed "hello" and "hexllxo"', () => {
    const result = isOneAway('hello', 'hexllxo');
    expect(result).toBe(false);
  });

  it('should return false when passed "hello" and "xhellox"', () => {
    const result = isOneAway('hello', 'xhellox');
    expect(result).toBe(false);
  });

  it('should return -1 when passed anything other than 2 strings', () => {
    let result = isOneAway();
    expect(result).toBe(-1);

    result = isOneAway('', 1);
    expect(result).toBe(-1);

    result = isOneAway(1, '');
    expect(result).toBe(-1);

    result = isOneAway('', true);
    expect(result).toBe(-1);

    result = isOneAway('', []);
    expect(result).toBe(-1);

    result = isOneAway({}, '');
    expect(result).toBe(-1);

    result = isOneAway('', function() {return true;});
    expect(result).toBe(-1);
  })

  it('should be case sensitive', () => {
    const result = isOneAway('hello there', 'Hello There');
    expect(result).toBe(false)
  });
});