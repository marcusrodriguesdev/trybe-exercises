const axios = require('axios').default;

const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

const headers = { Authorization: API_TOKEN };

axios.get('https://postman-echo.com/get?param1=teste', { headers })
  .then((response) => {
    return response.data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((errorResponse) => {
    if (errorResponse.status) {
      return console.log(`Request failed with status ${errorResponse.status}`);
    }
    console.log(errorResponse);
  });