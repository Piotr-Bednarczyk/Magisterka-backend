import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { setFormRoutes } from './routes/form.routes';
import dbConfig from './config/db.config';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const MONGO_URL = 'mongodb://localhost:27017/formsdb'; // dostosuj do swojej bazy

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

app.use(cors()); 

// Routes
setFormRoutes(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});