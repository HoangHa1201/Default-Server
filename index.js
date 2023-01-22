
const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv/config');
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// Routes
// get , post, path, delete

app.get('/', (req,res) => {
    res.send("Hello world")
})


// connect to MongoDB Atlas
mongoose.connect(
    process.env.DB_CONNECTION, () => {
    console.log("Connected to MongoDB Atlas")
})


// Listen
module.exports = app;
