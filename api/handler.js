'use strict';

const AWS = require('aws-sdk');
const uuid = require('uuid/v4');

const errors = require("./errors");
const parser = require("./parser");

// TODO: Check S3 credentials
AWS.config.update({
  region: process.env.AWS_S3_REGION || 'eu-west-1'
});
const s3 = new AWS.S3({
  signatureVersion: 'v4'
});

// TOOD: Error

module.exports.root = async event => {
  return {
    statusCode: 200,
    body: "Hello world"
  }
}

module.exports.upload = async event => {

  let { fileName } = parser.parseBody(event);
  if (!fileName) {
    return errors.ERROR_400;
  }

  if (fileName.indexOf(".") === -1) {
    fileName = uuid();
  }
  else {
    fileName = uuid() + "." + fileName.split(".").pop();
  }

  const s3Params = {
    Bucket: "helicoptershark-storage-dev",  // TODO: Env var here pls
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

module.exports.process = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      id: 1234
    })
  }
};
