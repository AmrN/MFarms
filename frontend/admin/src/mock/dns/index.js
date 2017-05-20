/* joi uses dns for validating emails, unfortunately it's not available for
   browsers, so we need to mock it: https://github.com/hapijs/isemail/issues/26 */
module.exports = {};
module.exports.default = {};