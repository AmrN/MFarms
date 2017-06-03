const yup = require('yup');

const postSchema = yup.object().shape({
  title: yup.string().min(5).max(200).required(),
  body: yup.string().min(10).required(),
  image: yup.string().nullable(), 
  gallery: yup.array(),
  authorId: yup.string().required(),
});

exports = module.exports = {
  postSchema: postSchema,
};