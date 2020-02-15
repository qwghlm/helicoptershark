'use strict';

const AWS = require('aws-sdk');
const uuid = require('uuid/v4');
const errors = require("./errors");

// TODO: Check S3 credentials
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
    return errors.ERROR_400;
  }

  let parsedBody;
  try {
    parsedBody = JSON.parse(body);
  }
  catch (e) {
    return errors.ERROR_400;
  }

  let { fileName } = parsedBody;
  if (!fileName) {
    return errors.ERROR_400;
  }

  if (fileName.indexOf(".") === -1) {
    fileName = uuid();
  }
  else {
    fileName = uuid() + "." + fileName.split(".").pop();
  }

  // TODO: Env var here pls
  const s3Params = {
    Bucket: "helicoptershark-storage-dev",
    Key: fileName,
    ACL: "private",
    Expires: 300,
  }

  return new Promise((resolve, reject) => {
    let url = s3.getSignedUrl('putObject', s3Params);
    resolve({
      statusCode: 200,
      body: JSON.stringify({
        url,
        fileName
      })
    });
  })
};
