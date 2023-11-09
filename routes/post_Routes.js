const express = require('express');
const router = express.Router();
const {
  verifyToken,
  verifyTokenAndAdmin,
} = require('../middleware/verifyToken');
const postClt = require('../controllers/postController');

router.post('/addpost', verifyTokenAndAdmin, postClt.addPost);
router.post('/likePost', verifyToken, postClt.likePost);

module.exports = router;
