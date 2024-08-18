import { spiceOptions } from "../src/data.js";

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
    return fraction.multiplyByInteger(3);
}

export function convertTspToTbsp(fraction) {
    return fraction.divideByInteger(3);
}

export function convertGroundToWhole(spice_str, amount, measure) {
    if (measure == "g" || measure == "kg") {
        return amount;
    }
    var convert_fraction = spiceOptions[spice_str].groundToWhole
    return amount.multiplyByFraction(convert_fraction)
}
