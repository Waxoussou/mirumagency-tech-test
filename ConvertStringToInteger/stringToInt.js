/**
 *  Donnez un algo (autre que le cast python de base) permettant de convertir une chaîne de caractère en entier.
 * ex en sortie d'une console python:
 * ```>>> stringToInt("-142")
 * -142
 */

function stringToInt(str) {

    const arr = str.split('')

    const negation = isNegativeNumber(str) && arr.shift()

    const newArr = arr.map(v => renderIntTypeFromIntString(v))
    const len = newArr.length;

    const value = newArr.reduce((acc, curr, index) => {
        const multiplicator = Math.pow(10, len - (index + 1))
        return acc + (curr * multiplicator)
    }, 0)

    return negation ? -value : value
}

function isNegativeNumber(str) {
    const regexp = /^-\d+$/
    return regexp.test(str)
}

function renderIntTypeFromIntString(intString) {
    if (utils.isStringOfTypeInt(intString)) {
        return utils.getIndexOfStringInteger(intString)
    };
}

const utils = {
    integerStringList: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],

    isStringOfTypeInt(str) {
        return this.integerStringList.includes(str)
    },

    getIndexOfStringInteger(str) {
        return this.integerStringList.indexOf(str);
    },
}


module.exports = { stringToInt, utils };
