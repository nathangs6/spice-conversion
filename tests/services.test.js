const {
    Fraction,
    convertGramsToKilograms,
    convertKilogramsToGrams,
    convertTbspToTsp,
    convertTspToTbsp
} = require("../src/services");

test('convert 1500g to kg is 1.5kg', () => {
    expect(convertGramsToKilograms(1500)).toBe(1.5)
});

test('convert 1.5kg to g is 1500g', () => {
    expect(convertKilogramsToGrams(1.5)).toBe(1500)
});

test('convert 4/3 tbsp to tsp', () => {
    start = new Fraction(4,3);
    result = convertTbspToTsp(start)
    expect(result.getNum()).toBe(12)
    expect(result.getDen()).toBe(3)
});

test('convert 22/8 tsp to tbsp', () => {
    start = new Fraction(22,8);
    result = convertTspToTbsp(start)
    expect(result.getNum()).toBe(22)
    expect(result.getDen()).toBe(24)
});