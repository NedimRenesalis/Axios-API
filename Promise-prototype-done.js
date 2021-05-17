const axios = require('axios');
require('promise/polyfill-done');

axios
  .get('http://www.example.com/user')
  .then((response) => {
    console.log(response.data);
    return response;
  })
  .done();
