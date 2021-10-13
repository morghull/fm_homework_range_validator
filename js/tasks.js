'use strict';

const errorStyle = 'color:tomato;font-size:14px;';
const validStyle = 'color:green;font-size:14px;';

try {
  const brokenRValidator1 = new RangeValidator('12', 25);
} catch (error) {
  console.log('%c%s', errorStyle, error);
}
try {
  const brokenRValidator2 = new RangeValidator(12, '25');
} catch (error) {
  console.log('%c%s', errorStyle, error);
}
try {
  const brokenRValidator3 = new RangeValidator(37, 24);
} catch (error) {
  console.log('%c%s', errorStyle, error);
}

const validRValidator = new RangeValidator(12, 25);
console.log('%c%s', validStyle, 'RangeValidator', validRValidator);