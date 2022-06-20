const fetchURL = require('../../utils/fetch');

exports.handler = async event => {
  try {
    const data = await fetchURL();
    console.log('data => ', data);

    return 'Done';
  } catch (error) {
    console.log('error => ', error);
    // throw error;
  }
};
