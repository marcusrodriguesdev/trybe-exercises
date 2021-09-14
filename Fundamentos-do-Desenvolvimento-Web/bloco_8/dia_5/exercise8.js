const assert = require('assert');

// escreva greet abaixo
const greet = (value1, value2 = 'Hi') => `${value2} ${value1}`;

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');