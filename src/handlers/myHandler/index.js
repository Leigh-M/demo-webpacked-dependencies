exports.handler = async event => {
  try {
    console.log('Entered function!!');

    return 'Done';
  } catch (error) {
    console.log('error => ', error);
    // throw error;
  }
};
