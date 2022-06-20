const fetch = require('node-fetch');

const fetchURL = async () => {
    const url = 'https://dummyjson.com/products/1')

    const response = await fetch(url);
    const json = await response.json();

    return json;
};

module.exports = fetchURL;