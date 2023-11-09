const mongoose = require('mongoose');

let connectDb = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017');
    console.log('Db is connected');
    // # MONGO_URL = mongodb+srv://root:1234@demo.opycalj.mongodb.net/healthcare?retryWrites=true&w=majority
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
