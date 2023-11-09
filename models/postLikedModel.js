const mongoose = require('mongoose');

const postLiked = mongoose.Schema(
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

module.exports = postLiked;
