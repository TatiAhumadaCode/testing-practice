const { test, expect } = require("@jest/globals");

import reverseString from "../code/reverse"

test('This is a reverse string', () => {
    expect(reverseString('string')).toBe('gnirts');
});
