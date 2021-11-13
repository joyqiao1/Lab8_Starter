// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Is not a phone number', () => {
  expect(functions.isPhoneNumber('dogpark')).toBe(false);
});

test('Is not a phone number', () => {
  expect(functions.isPhoneNumber('cselabseven')).toBe(false);
});

test('Is a phone number', () => {
  expect(functions.isPhoneNumber('626-266-6666')).toBe(true);
});

test('Is a phone number', () => {
  expect(functions.isPhoneNumber('626-266-6667')).toBe(true);
});

// Email
test('Is an email', () => {
  expect(functions.isEmail('1@mail.com')).toBe(true);
});

test('Is an email', () => {
  expect(functions.isEmail('jjjj@mail.com')).toBe(true);
});

test('Is an email', () => {
  expect(functions.isEmail('1@mail')).toBe(false);
});

test('Is an email', () => {
  expect(functions.isEmail('1.com')).toBe(false);
});

//Password
test('Is strong password', () => {
  expect(functions.isEmail('1@mail.com')).toBe(true);
});

test('Is strong password', () => {
  expect(functions.isEmail('jjjj@mail.com')).toBe(true);
});

test('Is not strong password', () => {
  expect(functions.isEmail('123344')).toBe(false);
});

test('Is not strong password', () => {
  expect(functions.isEmail('1ab33333')).toBe(false);
});

//Date
test('Is a Date', () => {
  expect(functions.isDate('01/11/2021')).toBe(true);
});

test('Is a Date', () => {
  expect(functions.isDate('08/09/2022')).toBe(true);
});

test('Is not a Date', () => {
  expect(functions.isDate('1/5/200')).toBe(false);
});

test('Is not a Date', () => {
  expect(functions.isDate('02/07/202')).toBe(false);
});

//Hexcolor
test('Is a Hexcolor', () => {
  expect(functions.isHexColor('ccc')).toBe(true);
});

test('Is Hexcolor', () => {
  expect(functions.isHexColor('dddaaa')).toBe(true);
});

test('Is not a Hexcolor', () => {
  expect(functions.isHexColor('a')).toBe(false);
});

test('Is not a Hexcolor', () => {
  expect(functions.isHexColor('chdkdkdldl')).toBe(false);
});