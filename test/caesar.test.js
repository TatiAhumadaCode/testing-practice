import caesar from "../code/caesar";

test('i\'m alone has to say \'jn bmpof', () => {
    expect(caesar("jn bmpof", -1)).toBe("im alone");
});

