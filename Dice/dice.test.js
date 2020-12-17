const { dice, oneOrTwo, splitArrayInTwoFromMiddleIndex } = require('./dice');

describe("MAIN Function : Dice() ", () => {

    test('should return an integer', () => {
        const randomValue = dice();
        expect(typeof randomValue).toBe("number");
    })

    test("should return a value between 1 and 6", () => {
        const randomValue = dice();

        expect(randomValue).toBeGreaterThanOrEqual(1);
        expect(randomValue).toBeLessThanOrEqual(6);
    })

})


describe("oneOrTwo Function", () => {

    test('should return 1 or 2', () => {
        expect(oneOrTwo()).toBeGreaterThanOrEqual(1)
        expect(oneOrTwo()).toBeLessThanOrEqual(2)
    })

})


describe("Split Array Function", () => {

    test('splitArray Fn should return an array', () => {
        const arr = [1, 32, 12, 3, 9, 10];
        expect(Array.isArray(splitArrayInTwoFromMiddleIndex(arr))).toBeTruthy()
    })

    test('splitArray Fn should return an array with 2 arrays within', () => {
        const arr = [1, 32, 12, 3, 9, 10];
        expect(Array.isArray(splitArrayInTwoFromMiddleIndex(arr)[0])).toBeTruthy()
        expect(Array.isArray(splitArrayInTwoFromMiddleIndex(arr)[1])).toBeTruthy()

        const smallerArray = [1, 3];
        expect(Array.isArray(splitArrayInTwoFromMiddleIndex(smallerArray)[0])).toBeTruthy()
        expect(Array.isArray(splitArrayInTwoFromMiddleIndex(smallerArray)[1])).toBeTruthy()

    })

    test("should array[0] contain firsts 3 values out of 6", () => {

        const arr = [1, 1, 1, 2, 2, 2];
        expect(splitArrayInTwoFromMiddleIndex(arr)[0]).toEqual([1, 1, 1]);
        expect(splitArrayInTwoFromMiddleIndex(arr)[1]).toEqual([2, 2, 2]);

    })

    test("should array[0] contain firsts value out of 3 and array[1] the two others", () => {

        const smallerArray = [1, 3, 2];
        expect(splitArrayInTwoFromMiddleIndex(smallerArray)[0]).toEqual([1]);
        expect(splitArrayInTwoFromMiddleIndex(smallerArray)[1]).toEqual([3, 2]);

    })

})