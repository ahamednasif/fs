const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables (Make sure to create a .env file with JWT_SECRET in the backend root)
dotenv.config();
const app = express();
const HOST = process.env.HOST || '0.0.0.0';
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

// 2. Mock Data routes (Authentic Batticaloa Portfolio & Certified Masterclasses)
app.get('/api/courses', (req, res) => {
  const offerings = [
    {
      id: 1,
      title: 'Hyper Realistic Illusion Cakes',
      description: 'Optical illusion art like textured pineapple cakes carved and sliced to reveal delectable interior layers.',
      category: 'Optical Illusion Art',
      image: '/course_fondant.png'
    },
    {
      id: 2,
      title: 'Multi Tier Luxury Wedding Cakes',
      description: 'Pure chocolate indulgence, delicate gold leaf accents, fresh strawberries, and structural doweling.',
      category: 'Weddings & Galas',
      image: '/course_wedding.png'
    },
    {
      id: 3,
      title: 'Thematic Spreads & Dessert Tables',
      description: 'Complete themed tables, edible lighthouses, custom cupcakes, boxed fudgy brownies, and strawberry chocolate slices.',
      category: 'Dessert Styling',
      image: '/course_buttercream.png'
    },
    {
      id: 4,
      title: '2 Tier Wedding Cake Stacking Class',
      description: 'Certificate awarded workshop: real cake baking, structural doweling, board wrapping, and flawless buttercream finishes.',
      category: 'Certified Masterclass',
      image: '/hero_cake.png'
    }
  ];
  res.json(offerings);
});

// Start Server
app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});

