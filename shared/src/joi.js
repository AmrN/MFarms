const isNode = (typeof process !== 'undefined') && (process.release) && (process.release.name === 'node');

var Joi;
if (isNode) {
  Joi = require('joi');
} else {
  Joi = require('joi-browser');
}

module.exports = Joi;
