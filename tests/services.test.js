import { Fraction } from "../src/data.js";

const {
    _gcd,
    convertGramsToKilograms,
    convertKilogramsToGrams,
    convertTbspToTsp,
    convertTspToTbsp,
    convertGroundToWhole,
    reduceFraction
} = require("../src/services");

test('gcd of 9 and 15 is 3', () => {
    expect(_gcd(9, 15)).toBe(3);
})

test('gcd of 15 and 9 is 3', () => {
    expect(_gcd(15, 9)).toBe(3);
})

test('reduced 9/15 is 3/5', () => {
    var f = new Fraction(9, 15);
    var res = reduceFraction(f);
    expect(res.getNum()).toBe(3);
    expect(res.getDen()).toBe(5);
})

test('reduced 15/9 is 5/3', () => {
    var f = new Fraction(15, 9);
    var res = reduceFraction(f);
    expect(res.getNum()).toBe(5);
    expect(res.getDen()).toBe(3);
})

test('reduced 6/35 is 6/35', () => {
    var f = new Fraction(6, 35);
    var res = reduceFraction(f);
    expect(res.getNum()).toBe(6);
    expect(res.getDen()).toBe(35);
})

test('convert 1500g to kg is 1.5kg', () => {
    expect(convertGramsToKilograms(1500)).toBe(1.5);
});

test('convert 1.5kg to g is 1500g', () => {
    expect(convertKilogramsToGrams(1.5)).toBe(1500);
});

test('convert 4/3 tbsp to tsp', () => {
    var start = new Fraction(4,3);
    var result = convertTbspToTsp(start);
    expect(result.getNum()).toBe(12);
    expect(result.getDen()).toBe(3);
});

test('convert 22/8 tsp to tbsp', () => {
    var start = new Fraction(22,8);
    var result = convertTspToTbsp(start);
    expect(result.getNum()).toBe(22);
    expect(result.getDen()).toBe(24);
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
    var converted = convertGroundToWhole(spice, amount, measure);
    expect(converted.getNum()).toBe(16);
    expect(converted.getDen()).toBe(9);
});