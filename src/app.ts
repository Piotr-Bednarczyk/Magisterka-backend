import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { setFormRoutes } from './routes/form.routes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const MONGO_URL = 'mongodb+srv://Piotrbed10:wDB7lHnVW1m37uxj@151010pb.xvr8yjm.mongodb.net/formsdb?retryWrites=true&w=majority&appName=151010PB';
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

app.use(cors({
  origin: '*'
}));

// Wake-up endpoint
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Routes
setFormRoutes(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});