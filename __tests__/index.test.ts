import { addOne } from '../src/index';

describe('addOne', () => {
  it('should add one to the input number', () => {
    // Test with positive number
    expect(addOne(5)).toBe(6);
    
    // Test with zero
    expect(addOne(0)).toBe(1);
    
    // Test with negative number
    expect(addOne(-3)).toBe(-2);
  });

  it('should return a number type', () => {
    expect(typeof addOne(10)).toBe('number');
  });

  it('should correctly add one to various numbers', () => {
    const testCases = [
      { input: 1, expected: 2 },
      { input: 10, expected: 11 },
      { input: -1, expected: 0 },
      { input: 999, expected: 1000 }
    ];

    testCases.forEach(({ input, expected }) => {
      expect(addOne(input)).toBe(expected);
    });
  });
});
