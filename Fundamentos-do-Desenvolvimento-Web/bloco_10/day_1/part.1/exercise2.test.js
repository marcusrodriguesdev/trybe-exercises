const { TestWatcher } = require("jest");

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
describe('se recebe um array e retorna uma copia desse array sem o elemento item', () => {
  test('Verifica se ao chamar o array retorna o esperado', () => {
    expect(([1, 2, 4])).toEqual(myRemove([1, 2, 3, 4], 3));
  });
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect((myRemove([1, 2, 3, 4], 3))).not.toEqual([1, 2, 3, 4]);
  });
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect((myRemove([1, 2, 3, 4]))).toEqual([1, 2, 3, 4]);
  });
})
