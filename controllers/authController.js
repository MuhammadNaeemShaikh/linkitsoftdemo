const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

module.exports = {
  signUp: async (req, res) => {
    try {
      console.log(req.body);
      const { firstName, lastName, userName, role, password } = req.body;

      if ((firstName, lastName, userName, role, password)) {
        const pass = await hashPasword(password);
        const userCreation = await userModel.create({
          firstName,
          lastName,
          userName,
          role,
          password: pass,
        });

        res.status(200).json({
          sucess: 'true',
          data: userCreation,
        });
      } else {
        res.status(200).json('Please Fill all fields');
      }
    } catch (error) {
      console.log(error);
      res.status(500).json('Something Went Wrong');
    }
  },
  login: async (req, res) => {
    try {
      const { userName, password } = req.body;

      if ((userName, password)) {
        const userFound = await userModel.findOne({
          userName,
        });
        if (userFound) {
          let matchPassword = await bcrypt.compare(
            password,
            userFound.password
          );
          if (!matchPassword) {
            throw new Error('Password is Incorrect');
          } else {
            let token = jwt.sign(
              { _id: userFound._id, role: userFound.role },
              'pakistan',
              { expiresIn: '3d' }
            );

            res.status(200).json({
              sucess: true,
              token,
            });
          }
        } else {
          res.status(200).json({
            sucess: 'False',
            message: 'user not found',
          });
        }
      } else {
        res.status(200).json('Please Fill all fields');
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json(error.message);
    }
  },
};

const hashPasword = async (pass) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(pass, salt);
  return hash;
};
