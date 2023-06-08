const request = require('request');

const input = process.argv.slice(2);
const requestUrl = `https://api.thecatapi.com/v1/breeds/search?q=${input[0]}`;

request(requestUrl, (error, response, body) => {
  const data = JSON.parse(body);
  // edge case: request failed
  if (error) {
    console.log(error);
  }
  // edge case: breed not found which will return an empty array
  if (!data.length) {
    console.log(`The requested breed "${input}" is not found`);
  } else {
    console.log(data[0].description);
  }
});

