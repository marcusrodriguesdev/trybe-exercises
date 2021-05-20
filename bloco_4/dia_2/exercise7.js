let menor = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (var index = 1; index < numbers.length; index+= 1) {
  if (numbers[index] < menor) {
    menor = numbers[index]
  }
}
console.log(menor)