var Mailchimp = require('mailchimp-api-v3');



// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    const mailchimpOptions = hook.app.get('mailchimp');
    const API_KEY = mailchimpOptions.apiKey;
    const LIST_ID = mailchimpOptions.listUniqueId;
    // const INSTANCE = mailchimpOptions.instance;
    const subscribeUrl = `/lists/${LIST_ID}/members`;

    const mailchimp = new Mailchimp(API_KEY);
    const data = {
      email_address: hook.data.email,
      status: 'subscribed',
      merge_fields: {
        'NAME': hook.data.name,
      } 
    };

    return mailchimp.post(subscribeUrl, data)
      .then(() => Promise.resolve(hook))
      .catch((err) => Promise.reject(err));
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    // return Promise.resolve(hook);
  };
};
