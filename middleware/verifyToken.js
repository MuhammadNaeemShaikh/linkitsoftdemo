const jwt = require('jsonwebtoken');

let verifyToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    if (authorization && authorization.startsWith('Bearer')) {
      const token = authorization.split(' ')[1];
      jwt.verify(token, 'pakistan', (err, user) => {
        if (err) {
          res.status(400).json(err);
        } else {
          req.user = user;
          next();
        }
      });
    } else {
      res.status(400).json('You are not authenticated');
    }
  } catch (error) {
    console.log(error);
  }
};

let verifyTokenAndAdmin = async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === 'admin') {
      next();
    } else {
      res.status(400).json('You are not allowed to do that');
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAdmin,
};
