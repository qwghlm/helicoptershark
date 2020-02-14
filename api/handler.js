'use strict';

const AWS = require('aws-sdk');
AWS.config.update({
  region: process.env.AWS_S3_REGION || 'eu-west-1'
});
const s3 = new AWS.S3({
  signatureVersion: 'v4'
});

// TOOD: Root & standard error

module.exports.upload = async event => {

  const { body } = event;
  if (!body) {
    return JSON.stringify({
      statusCode: 400,
      body: {
        error: "Bad request"
      }
    })
  }

  const { fileName } = JSON.parse(body);
  if (!fileName) {
    return JSON.stringify({
      statusCode: 400,
      body: {
        error: "Bad request"
      }
    })
  }

  const s3Params = {
    Bucket: "helicoptershark-storage-dev",
    Key: fileName,
    ACL: "private",
  }

  return new Promise((resolve, reject) => {
    let uploadURL = s3.getSignedUrl('putObject', s3Params)
    resolve({
      statusCode: 200,
      body: JSON.stringify({
        url: uploadURL,
        fileName: fileName
      })
    })
  })

};
