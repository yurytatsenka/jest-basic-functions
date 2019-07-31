const functions = require('./functions');

// import { functions } from './functions.js';
// import { test, expect } from 'jest';

test('adds two parameters TO equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('adds two parameters NOT TO equal 4', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
