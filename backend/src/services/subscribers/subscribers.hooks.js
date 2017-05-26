

const mailChimpSubscribe = require('../../hooks/mail-chimp-subscribe');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [mailChimpSubscribe()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
