const schemas = require('../../../shared/src/schemas');
// const URLSlugs = require('mongoose-url-slugs');
const slugify = require('slugify-mongoose');

// posts-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  mongooseClient.set('debug', true);
  const posts = new mongooseClient.Schema({
    title: { type: String, required: true },
    slug: { type: String, slug: 'title', index: true, unique: true },
    body: { type: String, required: true },
    image: { type: String, required: false, default: null },
    gallery: [{ type: String }],
    authorId: { type: String, ref: 'User' },
  }, {
    timestamps: true,
  });

  // add slug
  posts.plugin(slugify);

  // text index all string fields
  posts.index({ title: 'text', body: 'text' });


  posts.joiSchema = schemas.postSchema;

  return mongooseClient.model('posts', posts);
};
