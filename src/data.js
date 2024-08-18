export function _gcd(a, b) {
    return b ? _gcd(b, a%b) : a;
}

export class Fraction {
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
    equals(f) {
        var thisReduced = this.reduce()
        var fReduced = f.reduce()
        return thisReduced.getNum() == fReduced.getNum() && thisReduced.getDen() == fReduced.getDen();
    }
    reduce() {
        var n = this.getNum()
        var d = this.getDen()
        var gcd = _gcd(n, d);
        return new Fraction(Math.floor(n/gcd), Math.floor(d/gcd))
    }
    makeMixed() {
        var n = this.getNum();
        var d = this.getDen();

        return [Math.floor(n/d), new Fraction(n%d, d)];
    }
    multiplyByInteger(n) {
        return new Fraction(this.getNum()*n, this.getDen());
    }
    divideByInteger(n) {
        return new Fraction(this.getNum(), this.getDen()*n);
    }
    addInteger(n) {
        return new Fraction(this.getNum() + n*this.getDen(), this.getDen())
    }
    multiplyByFraction(f) {
        return new Fraction(this.getNum() * f.getNum(), this.getDen() * f.getDen());
    }
}

export const spiceOptions = {
    peppercorn: {
        value: "peppercorn",
        text: "Peppercorn",
        groundToWhole: new Fraction(1,1),
        tbspToGrams: 8.1
    },
    allspice: {
        value: "allspice",
        text: "Allspice",
        groundToWhole: new Fraction(4,3),
        tbspToGrams: 8.1,
    },
    cumin: {
        value: "cumin",
        text: "Cumin",
        groundToWhole: new Fraction(4,3),
        tbspToGrams: 6.84

    },
    caraway: {
        value: "caraway",
        text: "Caraway",
        groundToWhole: new Fraction(4,3),
        tbspToGrams: 7.27

    },
    fennel: {
        value: "fennel",
        text: "Fennel",
        groundToWhole: new Fraction(4,3),
        tbspToGrams: 6.58

    },
    mustard: {
        value: "mustard",
        text: "Mustard",
        groundToWhole: new Fraction(1,1),
        tbspToGrams: 8.1

    },
    anise_seed: {
        value: "anise_seed",
        text: "Anise Seed",
        groundToWhole: new Fraction(1,1),
        tbspToGrams: 8.1

    },
    dill_seed: {
        value: "dill_seed",
        text: "Dill Seed",
        groundToWhole: new Fraction(1,1),
        tbspToGrams: 8.1

    },
    celery_seed: {
        value: "celery_seed",
        text: "Celery Seed",
        groundToWhole: new Fraction(1,1),
        tbspToGrams: 8.1

    },
    cardamom: {
        value: "cardamom",
        text: "Cardamom",
        groundToWhole: new Fraction(6,1),
        tbspToGrams: 8.1,
        wholeMeasure: "pods"

    },
    cloves: {
        value: "cloves",
        text: "Clove",
        groundToWhole: new Fraction(4,3),
        tbspToGrams: 8.1

    },
    coriander: {
        value: "coriander",
        text: "Coriander",
        groundToWhole: new Fraction(2,1),
        tbspToGrams: 8.1

    },
    cinnamon: {
        value: "cinnamon",
        text: "Cinnamon",
        groundToWhole: new Fraction(3,1),
        tbspToGrams: 8.1,
        wholeMeasure: "inch stick"

    }
}

export const measurementOptions = [
    { value: "g", text: "g" },
    { value: "kg", text: "kg" },
    { value: "tsp", text: "tsp" },
    { value: "tbsp", text: "tbsp" }
]

export const fractionOptions = [
    { value: "0/1", text: "0" },
    { value: "1/16", text: "1/16" },
    { value: "1/8", text: "1/8" },
    { value: "3/16", text: "3/16" },
    { value: "1/4", text: "1/4" },
    { value: "5/16", text: "5/16" },
    { value: "3/8", text: "3/8" },
    { value: "7/16", text: "7/16" },
    { value: "1/2", text: "1/2" },
    { value: "9/16", text: "9/16" },
    { value: "5/8", text: "5/8" },
    { value: "11/16", text: "11/16" },
    { value: "3/4", text: "3/4" },
    { value: "13/16", text: "13/16" },
    { value: "7/8", text: "7/8" },
    { value: "15/16", text: "15/16" }
];
