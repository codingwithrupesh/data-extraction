const express = require('express');
const fileRoutes = require('./routes/fileRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('uploads'));

// File Upload Setup
const upload = multer({ dest: 'uploads/' });
app.use(upload.single('file'));

// Routes
app.use('/api/files', fileRoutes);

module.exports = app;
