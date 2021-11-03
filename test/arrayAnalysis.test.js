import myObject from "../code/arrayAnalysis";


test('average is: 4, min: 1, max: 8 and length is: 6', () => {
    expect(myObject([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
});