const promise = () => {
  const myPromise =  new Promise((resolve, reject) => {
    const array = [20 ** 2, 5 ** 2, 7 ** 2, 11 ** 2, 30 ** 2, 9 ** 2, 22 ** 2, 3 ** 2, 23 ** 2, 16 ** 2];
    const someNumbers = array.reduce((acc, curr) => acc + curr, 0)
    if (someNumbers < 8000) {
      resolve(someNumbers)
    }
    reject()
  });
  myPromise
  .then(someNumbers => {
    const numeros = [2, 3, 5, 10];
    const result = numeros.map((number) => someNumbers / number)
    console.log(result);
  })
  .then(arr => arr.reduce((acc, curr) => acc + curr, 0))
  .catch(error => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

promise() 
