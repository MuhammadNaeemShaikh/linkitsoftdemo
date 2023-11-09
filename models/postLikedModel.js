const mongoose = require('mongoose');

const postLikedSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'post',
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'user',
    },
  },
  {
    timeStamps: true,
  }
);

const postLiked = mongoose.model('LikedPost',postLikedSchema)

module.exports = postLiked;
