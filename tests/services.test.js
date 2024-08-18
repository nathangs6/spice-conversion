import { Fraction } from "../src/data.js";

const {
    convertGramsToKilograms,
    convertKilogramsToGrams,
    convertTbspToTsp,
    convertTspToTbsp,
    convertGroundToWhole,
} = require("../src/services");

test('convert 1500g to kg is 1.5kg', () => {
    expect(convertGramsToKilograms(1500)).toBe(1.5);
});

test('convert 1.5kg to g is 1500g', () => {
    expect(convertKilogramsToGrams(1.5)).toBe(1500);
});

test('convert 4/3 tbsp to tsp', () => {
    var f = new Fraction(4,3);

    var expected = new Fraction(12,3);
    var result = convertTbspToTsp(f);
    expect(result.equals(expected)).toBe(true);
});

test('convert 22/8 tsp to tbsp', () => {
    var f = new Fraction(22,8);

    var expected = new Fraction(22, 24);
    var result = convertTspToTbsp(f);
    expect(result.equals(expected)).toBe(true);
});

test('convert 25g of ground allspice to whole', () => {
    var spice = "allspice";
    var amount = 25;
    var measure = "g";
    var converted = convertGroundToWhole(spice, amount, measure);
    expect(converted).toBe(25);
});

test('convert 1 1/3 of ground allspice to whole', () => {
    var spice = "allspice";
    var amount = new Fraction(4, 3);
    var measure = "tbsp";

    var expected = new Fraction(16, 9);
    var converted = convertGroundToWhole(spice, amount, measure);
    expect(converted.equals(expected)).toBe(true);
});