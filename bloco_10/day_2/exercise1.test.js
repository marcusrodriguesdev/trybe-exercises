const { expect } = require("@jest/globals");

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('Check if string return uppercase', (done) => {
  uppercase('vamo', (result) => {
    expect(result).toBe('VAMO');
    done();
  });
})
