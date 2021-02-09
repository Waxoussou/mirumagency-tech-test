/**
 * Supposons que nous ayons un tableau d'entiers ([4,8,8,5,1,4,5] par exemple), 
 * ou tous les nombres se répète deux fois, sauf un seul. 
 * Donnez une fonction qui prend en entrée un tableau et qui renvoi le nombre en question 
 * ou une erreur si absent. 
 * */


function returnLonelyNumber(arr) {
    const valueTracker = new Set();

    arr.map(value => valueTracker.has(value) ?
        valueTracker.delete(value) :
        valueTracker.add(value))

    if (valueTracker.size !== 1) return new Error("invalid input");

    return Array.from(valueTracker)[0]
}


module.exports = returnLonelyNumber;


