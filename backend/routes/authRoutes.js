const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Example of a protected route to verify token
router.get('/profile', protect, (req, res) => {
  res.json({ message: 'Access granted to secure profile data', user: req.user });
});

module.exports = router;
