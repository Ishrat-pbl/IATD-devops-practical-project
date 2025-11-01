import { isValidDateString, wrapString } from "../src/utilities";

test("wrapString: wrap single word over two lines", () => {
    expect(wrapString("Long", 3)).toBe("Lo-\nng");
});

test("wrapString: wrap multiple words over two lines", () => {
    expect(wrapString("Too long", 4)).toBe("Too\nlong");
});

test("wrapString: wrap complex sentence", () => {
    expect(wrapString("This is a complex sentence that needs to be wrapped", 6)).toBe("This\nis a\ncompl-\nex se-\nntence\nthat\nneeds\nto be\nwrapp-\ned");
});

// PLACE TESTS FOR isValidDateString UNDER HERE

// Test for invalid string

// Test for the wrong amount of "date segments" (see comments in utilities.js for more info)

// Test for wrong number of digits in the day

// Test for wrong number of digits in the month

// Test for wrong number of digits in the year

// Test for day outside of month's number of days

// Test for month greater than 12

// Test for day <= 0

//import { isValidDateString } from './utilities.js';

describe('isValidDateString()', () => {
    test('should return true for a valid date', () => {
        expect(isValidDateString('15/03/2024')).toBe(true);
    });

    test('should return false for an invalid day', () => {
        expect(isValidDateString('32/01/2024')).toBe(false); // too many days
    });

    test('should return false for invalid month', () => {
        expect(isValidDateString('10/13/2024')).toBe(false); // invalid month
    });

    test('should return true for 29/02/2024 (leap year assumed)', () => {
        expect(isValidDateString('29/02/2024')).toBe(true);
    });

    test('should return false for day 0', () => {
        expect(isValidDateString('00/05/2024')).toBe(false);
    });

    test('should return false for month 0', () => {
        expect(isValidDateString('10/00/2024')).toBe(false);
    });

    test('should return false for negative year', () => {
        expect(isValidDateString('10/10/-2024')).toBe(false);
    });

    test('should return false for invalid format (missing segments)', () => {
        expect(isValidDateString('10/10')).toBe(false);
    });

    test('should return false for invalid format (wrong digit count)', () => {
        expect(isValidDateString('1/1/2024')).toBe(false);
    });

    test('should return false for non-numeric values', () => {
        expect(isValidDateString('aa/bb/cccc')).toBe(false);
    });

    test('should return false for 31/04/2024 (April has 30 days)', () => {
        expect(isValidDateString('31/04/2024')).toBe(false);
    });

    test('should return true for 31/12/2025 (valid end of year)', () => {
        expect(isValidDateString('31/12/2025')).toBe(true);
    });
});