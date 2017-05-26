const posts = require('./posts/posts.service.js');
const users = require('./users/users.service.js');
const upload = require('./upload/upload.service.js');
const subscribers = require('./subscribers/subscribers.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(posts);
  app.configure(users);
  app.configure(upload);
  app.configure(subscribers);
};
