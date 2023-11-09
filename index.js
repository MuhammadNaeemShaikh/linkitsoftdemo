const express = require('express');

//<--------------importing routes
const authRoutes = require('./routes/auth_Routes');
const postRoutes = require('./routes/post_Routes');

//<-------------------------------import db----------------------->
const connectDb = require('./utils/db');

//intiallizing app
const app = express();

//running db
connectDb();

app.use(express.json());

//routes
app.use('/api/authRoutes', authRoutes);
app.use('/api/postRoutes', postRoutes);

app.listen(3000, () => {
  console.log('Server is Running on 5000');
});
