const { test, expect } = require("@jest/globals");

import { addOperator, subOperator, divOperator, multOperator } from "../code/calculator"

test('two plus two is four', () => {
    expect(addOperator(2, 2)).toBe(4);
});

test('two minus one is one', () => {
    expect(subOperator(2, 1)).toBe(1);
});

test('four divided in two is two', () => {
    expect(divOperator(4, 2)).toBe(2);
});

test('two times two is four', () => {
    expect(multOperator(2, 2)).toBe(4);
});