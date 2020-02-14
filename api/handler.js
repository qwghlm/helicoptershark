'use strict';

// TOOD: Root & standard error

module.exports.upload = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        url: 'https://foo.com/upload',
      }
    ),
  };
};
