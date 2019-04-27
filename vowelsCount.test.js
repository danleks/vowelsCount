const vowelsCount = require('./vowelsCount');

test('test for falsy values', () => {
    expect(vowelsCount(2)).toBeFalsy();
});

test('test if the function returns number of vowels in a string', () => {
    expect(vowelsCount('Abracadabra')).toBe(5);
});