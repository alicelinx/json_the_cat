const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    // edge case: request failed
    if (error) {
      callback(error, null);
    }
    // edge case: breed not found which will return an empty array
    if (!data.length) {
      callback('Breed not found', null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };