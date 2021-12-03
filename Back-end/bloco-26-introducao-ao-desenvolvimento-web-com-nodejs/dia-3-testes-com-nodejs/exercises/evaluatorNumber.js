
function evaluatorNumber(number) {
  if (number > 0) {
    return 'positivo';
  } else if (number < 0) {
    return 'negativo';
  } else if (typeof number !== 'number') {
    return 'o valor deve ser um número';
  } else {
    return 'neutro';
  }
}

module.exports = evaluatorNumber;
