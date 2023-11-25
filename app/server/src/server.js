const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/mern-docker', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Bodyparser Middleware
app.use(bodyParser.json());

// Use Routes
app.use('/api', routes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));