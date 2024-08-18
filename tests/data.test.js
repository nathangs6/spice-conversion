import { Fraction, _gcd } from "../src/data.js";

test('gcd of 9 and 15 is 3', () => {
    expect(_gcd(9, 15)).toBe(3);
})

test('gcd of 15 and 9 is 3', () => {
    expect(_gcd(15, 9)).toBe(3);
})

test('3/15 equals 3/15', () => {
    var f1 = new Fraction(3, 15);
    var f2 = new Fraction(3, 15);
    expect(f1.equals(f2)).toBe(true);
})

test('3/15 equals 6/30', () => {
    var f1 = new Fraction(3, 15);
    var f2 = new Fraction(6, 30);
    expect(f1.equals(f2)).toBe(true);
})

test('3/15 does not equal 1/15', () => {
    var f1 = new Fraction(3, 15);
    var f2 = new Fraction(1, 15);
    expect(f1.equals(f2)).toBe(false);
})

test('reduced 9/15 is 3/5', () => {
    var f = new Fraction(9, 15);
    var res = f.reduce();
    expect(res.getNum()).toBe(3);
    expect(res.getDen()).toBe(5);
})

test('reduced 15/9 is 5/3', () => {
    var f = new Fraction(15, 9);
    var res = f.reduce();
    expect(res.getNum()).toBe(5);
    expect(res.getDen()).toBe(3);
})

test('reduced 6/35 is 6/35', () => {
    var f = new Fraction(6, 35);
    var res = f.reduce();
    expect(res.getNum()).toBe(6);
    expect(res.getDen()).toBe(35);
})