export const toFizzBuzz = (n) => {
  const array = Array(n)
    .fill(0)
    .map((_, i) => i + 1);
  return array.map((item) => fizzBuzz(item)).join(' ');
};

const fizzBuzz = (n) => {
  const multFive = n % 5 == 0;
  const multThree = n % 3 == 0;
  if (multThree && multFive) {
    return 'FizzBuzz';
  }
  if (multThree) {
    return 'Fizz';
  }
  if (multFive) {
    return 'Buzz';
  }
  return n;
};
