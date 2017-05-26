// subscribers-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const subscribers = new mongooseClient.Schema({
    email: { type: String, required: true, index: true },
    name: { type: String, required: true },
  }, {
    timestamps: true,
  });

  return mongooseClient.model('subscribers', subscribers);
};
