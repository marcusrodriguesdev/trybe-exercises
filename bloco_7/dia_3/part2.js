// exercise 1
const assert = require('assert');
// escreva a função addOne aqui
const addOne = (array) => {
  const output = [];
  for (let index = 0; index < array.length; index += 1) {
    output.push(array[index] + 1);
 }
 return output;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

// Exercise 2
const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (array) => {
  const output = [];
  for (let index = 0; index < array.length; index += 1) {
    output.push(array[index].length);
  }
  return output;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

// Exercise 3
const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (array) => {
  let output = 0; 
  for (let index in array) {
    output = output + array[index]
  }
  return output;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

// Exercise 4
const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (array, word) => {
  let output = -1;
  for (let index in word) {
    if (word === array[index]) {
      output = Number(index);
    }
  }
  return output;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);

