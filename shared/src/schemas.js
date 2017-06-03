const Joi = require('./joi');

const postSchema = Joi.object().keys({
  title: Joi.string().min(5).max(200).required(),
  body: Joi.string().min(10).required(),
  image: Joi.string().allow(null), 
  gallery: Joi.array(),
  authorId: Joi.string().required(),
});

exports = module.exports = {
  postSchema: postSchema,
};