
const { expect } = require('@jest/globals');
const { stringToInt, utils } = require('./stringToInt');

describe('MAIN', () => {

    test('should render input of type string into integer', () => {
        const intStr = "2332";
        expect(stringToInt(intStr)).toStrictEqual(2332)
    })

    test('should render a negative number from input string integer ', () => {
        const negativeIntStr = "-332";
        expect(stringToInt(negativeIntStr)).toStrictEqual(-332)
    })

    test("should return NaN if not convertible to type int", () => {
        const noPotentialNumber = "fjdkl13h";
        expect(stringToInt(noPotentialNumber)).toBeFalsy();
        expect(stringToInt(noPotentialNumber)).toBeNaN();
    })
})

describe('UTILS', () => {

    test('expect to get equivalence from string to number', () => {
        const fakeInput = "9";
        expect(typeof fakeInput).toBe('string')

        const val = utils.getIndexOfStringInteger(fakeInput);
        expect(val).toStrictEqual(9);
        expect(typeof val).toBe('number');
    })

    test('should render true when string "2" is given as input value', () => {
        const intStr = "2";
        expect(utils.isStringOfTypeInt(intStr)).toBeTruthy()
    })

    test('should render false when string value is "un"', () => {
        const noIntStr = "un";
        expect(utils.isStringOfTypeInt(noIntStr)).toBeFalsy()
    })
})

