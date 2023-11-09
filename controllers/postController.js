const postModel = require('../models/postModel');
const postLiked = require('../models/postLikedModel');

module.exports = {
  addPost: async (req, res) => {
    try {
      const { title, body } = req.body;
      const { _id } = req.user;
      console.log('_id', req.user);

      const createPost = await postModel.create({
        title,
        body,
        userId: _id,
      });

      res.status(200).json({
        success: true,
        data: createPost,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json('SomeThing Went Wrong');
    }
  },
  likePost: async (req, res) => {
    try {
      const { postId } = req.body;
      const { _id } = req.user;

      const createPostLiked = postLiked.create({
        userId: _id,
        postId,
      });
    } catch (error) {
      console.log(error);
      res.status(200).json('Something Went Wrong');
    }
  },
};
