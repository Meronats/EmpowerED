const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // for parsing application/json

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/learning-paths', require('./routes/learningPaths'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the public directory
app.use(express.static('public'));

// Additional routes and middleware...
