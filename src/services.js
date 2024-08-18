import { Fraction, spiceOptions } from "../src/data.js";

//////////////////////////
/// FRACTION FUNCTIONS ///
//////////////////////////
// Fractions will be of the form a = {num: val, den: val}
export function addFractionAndInteger(f, n) {
    return new Fraction(f.getNum() + f.getDen(), f.getDen())
}

function multiplyFractionByInteger(fraction, n) {
    return new Fraction(fraction.getNum() * n, fraction.getDen());
}

function divideFractionByInteger(fraction, n) {
    return new Fraction(fraction.getNum(), fraction.getDen() * n)
}

function multiplyFractionByFraction(fraction1, fraction2) {
    return new Fraction(fraction1.getNum()*fraction2.getNum(), fraction1.getDen()*fraction2.getDen())
}

export function _gcd(a, b) {
    return b ? _gcd(b, a%b) : a;
}

export function reduceFraction(f) {
    var n = f.getNum()
    var d = f.getDen()
    var gcd = _gcd(n, d);
    return new Fraction(Math.floor(n/gcd), Math.floor(d/gcd))
}

export function makeMixedFraction(f) {
    var n = f.getNum();
    var d = f.getDen();

    return [Math.round(n/d), new Fraction(n%d, d)];
}

////////////////////////////
/// CONVERSION FUNCTIONS ///
////////////////////////////
export function convertKilogramsToGrams(value) {
    return value * 1000;
}

export function convertGramsToKilograms(value) {
    return value / 1000;
}

export function convertTbspToTsp(fraction) {
    return multiplyFractionByInteger(fraction, 3)
}

export function convertTspToTbsp(fraction) {
    return divideFractionByInteger(fraction, 3)
}

export function convertGroundToWhole(spice_str, amount, measure) {
    if (measure == "g" || measure == "kg") {
        return amount;
    }
    var convert_fraction = spiceOptions[spice_str].groundToWhole
    var new_value = multiplyFractionByFraction(amount, convert_fraction)
    return new_value
}
