const returnLonelyNumber = require('./returnLonelyNumber');

describe('Lonely Number main Fn', () => {

    test('should return an error if no lonely number in given array', () => {

        const errorArray = [2, 3, 6, 3, 2, 6];

        expect(returnLonelyNumber(errorArray)).toBeInstanceOf(Error);
        expect(returnLonelyNumber(errorArray).message).toBe('invalid input');
    })


    test('should return the lonely number from array', () => {

        const inputArray = [4, 8, 8, 5, 1, 4, 5];
        expect(returnLonelyNumber(inputArray)).toBe(1);

        const inputArray2 = [4, 3, 8, 1, 32, 8, 5, 1, 32, 4, 5];
        expect(returnLonelyNumber(inputArray2)).toBe(3);
    })
})