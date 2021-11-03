//to uppercase the first letter of a string
const { test, expect } = require("@jest/globals");

import capitalizeString from "../code/main";

test('The first letter is uppercase', () => {
    expect(capitalizeString('string')).toBe('String');
});

