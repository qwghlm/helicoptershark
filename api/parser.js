'use strict';

module.exports.parseBody = event => {
  const { body } = event;
  if (!body) {
    return {};
  }

  try {
    return JSON.parse(body);
  }
  catch (e) {
    return {};
  }
}
