// For CommonJS 
const { add, subtract, test } = require('./math');

// For ES6 Module
// import { text } from './math';

let a = 3;
let b = 2;

console.log(text);
console.log(test);
console.log('3 + 2 = %d', add(a, b));
console.log('3 - 2 = %d', subtract(a, b));