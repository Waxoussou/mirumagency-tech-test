/**
 * En vous servant uniquement de la fonction oneOrTwo() ci-dessous (et donc aucune autre méthode existante pour faire de l’aléatoire), 
 * faire la fonction dice() qui va renvoyer un chiffre entre 1 et 6 ( un dé à jouer donc) 
 * avec exactement les mêmes probabilités de tirage pour chaque chiffre. 
 * 
 * ```  def oneOrTwo() :
 *              return random.randint(1, 2) ```
 * 
 * */

function dice(values) {
    if (!values) { values = [1, 2, 3, 4, 5, 6] }

    const splitValues = splitArrayInTwoFromMiddleIndex(values)
    const selector = oneOrTwo() - 1;

    const selectedSplitValues = splitValues[selector]

    if (selectedSplitValues.length > 1) {
        return dice(selectedSplitValues);
    }

    return selectedSplitValues[0];

}

function splitArrayInTwoFromMiddleIndex(arr) {
    const middle = Math.floor(arr.length / 2);

    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return [left, right]
}

function oneOrTwo() {
    return Math.round(Math.random()) + 1
}


module.exports = { dice, oneOrTwo, splitArrayInTwoFromMiddleIndex };