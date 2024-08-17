// Table construction
var spiceOptions = {
    peppercorn: { value: "peppercorn", text: "Peppercorn", groundToWhole: "1" },
    allspice: { value: "allspice", text: "Allspice", groundToWhole: "4/3" },
    juniper: { value: "juniper", text: "Juniper", groundToWhole: "4/3" },
    cumin: { value: "cumin", text: "Cumin", groundToWhole: "4/3" },
    caraway: { value: "caraway", text: "Caraway", groundToWhole: "4/3" },
    fennel: { value: "fennel", text: "Fennel", groundToWhole: "4/3" },
    mustard: { value: "mustard", text: "Mustard", groundToWhole: "1" },
    anise_seed: { value: "anise_seed", text: "Anise Seed", groundToWhole: "1" },
    dill_seed: { value: "dill_seed", text: "Dill Seed", groundToWhole: "1" },
    celery_seed: { value: "celery_seed", text: "Celery Seed", groundToWhole: "1" },
    cardamom: { value: "cardamom", text: "Cardamom", groundToWhole: "6", wholeMeasure: "pods" },
    cloves: { value: "cloves", text: "Clove", groundToWhole: "4/3" },
    coriander: { value: "coriander", text: "Coriander", groundToWhole: "2" },
    cinnamon: { value: "cinnamon", text: "Cinnamon", groundToWhole: "3", wholeMeasure: "inch stick" }
}

var measurementOptions = [
    { value: "g", text: "g" },
    { value: "kg", text: "kg" },
    { value: "tsp", text: "tsp" },
    { value: "tbsp", text: "tbsp" }
]


//////////////////////////
/// FRACTION FUNCTIONS ///
//////////////////////////
// Fractions will be of the form a = {num: val, den: val}
class Fraction {
    constructor(num, den) {
        this.num = num;
        this.den = den;
    }
    getNum() {
        return this.num;
    }
    getDen() {
        return this.den;
    }
}

function multiplyFractionByInteger(fraction, n) {
    return new Fraction(fraction.getNum() * n, fraction.getDen());
}

function divideFractionByInteger(fraction, n) {
    return new Fraction(fraction.getNum(), fraction.getDen() * n)
}

////////////////////////////
/// CONVERSION FUNCTIONS ///
////////////////////////////
function convertKilogramsToGrams(value) {
    return value * 1000;
}

function convertGramsToKilograms(value) {
    return value / 1000;
}

function convertTbspToTsp(fraction) {
    return multiplyFractionByInteger(fraction, 3)
}

function convertTspToTbsp(fraction) {
    return divideFractionByInteger(fraction, 3)
}

module.exports = {
    Fraction,
    convertGramsToKilograms,
    convertKilogramsToGrams,
    convertTbspToTsp,
    convertTspToTbsp
};