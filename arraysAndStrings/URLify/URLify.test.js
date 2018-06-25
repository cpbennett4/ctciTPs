const URLify = require('./URLify.js');

describe('URLify', () => {
  it('should exist', () => {
    const type = typeof URLify;
    expect(type).toBe('function');
  });

  it('should accept a single argument', () => {
    expect(URLify).toHaveLength(1);
  });

  it('should return -1 if not passed anything', () => {
    expect(URLify()).toBe(-1);
  });

  it('should return -1 if not passed a string', () => {
    expect(URLify(9)).toBe(-1);
    expect(URLify({})).toBe(-1);
    expect(URLify([])).toBe(-1);
    expect(URLify(true)).toBe(-1);
  });

  it('should return "Mr%20John%20Smith" when passed "Mr John Smith"', () => {
    expect(URLify('Mr John Smith')).toEqual('Mr%20John%20Smith');
  });

  it('should return "Mr%20John%20Smith%20" when passed "Mr John Smith "', () => {
    expect(URLify('Mr John Smith ')).toEqual('Mr%20John%20Smith%20');
  });

  it('should return "%20Mr%20John%20Smith" when passed " Mr John Smith"', () => {
    expect(URLify(' Mr John Smith')).toEqual('%20Mr%20John%20Smith');
  });

  it('should return "Mr%20John%20Smith%20%20" when passed "Mr John Smith  "', () => {
    expect(URLify('Mr John Smith  ')).toEqual('Mr%20John%20Smith%20%20');
  });

  it('should return "Mr%20John%20%20Smith" when passed "Mr John  Smith"', () => {
    expect(URLify('Mr John  Smith')).toEqual('Mr%20John%20%20Smith');
  });

  it('should return "%20Mr%20%20John%20%20Smith" when passed " Mr  John  Smith"', () => {
    expect(URLify(' Mr  John  Smith')).toEqual('%20Mr%20%20John%20%20Smith');
  });
});