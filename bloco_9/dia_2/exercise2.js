const promise = () => {
  const myPromise =  new Promise((resolve, reject) => {
    const array = [20 ** 2, 5 ** 2, 7 ** 2, 11 ** 2, 30 ** 2, 9 ** 2, 22 ** 2, 3 ** 2, 23 ** 2, 16 ** 2];
    const someNumbers = array.reduce((acc, curr) => acc + curr, 0)
    if (someNumbers < 8000) {
      resolve()
    }
    reject()
  });
  myPromise
  .then(number => console.log('Promise resolvida'))
  .catch(error => console.log('Promise rejeitada'));
}

promise()
