import { toFizzBuzz } from '.';
import { toThree, toFive, toFifteen } from './data.js';

test('FizzBuzz case three number', () => {
  const three = toFizzBuzz(3);
  expect(toThree).toEqual(three);
});

test('FizzBuzz case five number', () => {
  const five = toFizzBuzz(5);
  expect(toFive).toEqual(five);
});

test('FizzBuzz case fifteen number', () => {
  const fifteen = toFizzBuzz(15);
  expect(toFifteen).toEqual(fifteen);
});
