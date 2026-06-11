const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables (Make sure to create a .env file with JWT_SECRET in the backend root)
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/flourshower');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log('MongoDB connection error. (Is MongoDB running locally?):', err.message);
    // process.exit(1); // Depending on your needs, you might want it to crash if DB fails
  }
};

connectDB();

// --- Routes ---

// 1. Authentication Routes
app.use('/api/auth', require('./routes/authRoutes'));

// 2. Mock Data routes (From previous setup)
app.get('/api/courses', (req, res) => {
  const courses = [
    {
      id: 1,
      title: 'Fondant Basics',
      description: 'Master the art of smooth fondant covering and sharp edges.',
      difficulty: 'Beginner',
      image: '/course-fondant.jpg'
    },
    {
      id: 2,
      title: 'Tiered Wedding Cakes',
      description: 'Learn structural integrity and elegant floral designs for weddings.',
      difficulty: 'Advanced',
      image: '/course-wedding.jpg'
    },
    {
      id: 3,
      title: 'Buttercream Florals',
      description: 'Pipe breathtaking, lifelike flowers using glossy buttercream.',
      difficulty: 'Intermediate',
      image: '/course-buttercream.jpg'
    }
  ];
  res.json(courses);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

