import { isEven } from './index.js'; // Import your function

// Test cases
console.assert(isEven(2) === true, '2 should be even');
console.assert(isEven(4) === true, '4 should be even');
console.assert(isEven(0) === true, '0 should be even');
console.assert(isEven(3) === false, '3 should be odd');
console.assert(isEven(7) === false, '7 should be odd');

// Optional: Test negative numbers
console.assert(isEven(-2) === true, '-2 should be even');
console.assert(isEven(-5) === false, '-5 should be odd');

console.log('All tests passed');
