// controllers/authController.js
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Create new user (password hashing is handled by the pre-save middleware)
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Error in registerUser:", error.message);
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

// Login user (unchanged from previous code)
// controllers/authController.js
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt with email:", email);

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match status:", isMatch);
    if (!isMatch) {
      console.log("Incorrect password");
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    console.log("JWT generated:", token);

    res.status(200).json({ user: { email: user.email, name: user.name, token, isAdmin: user.isAdmin }, message: 'Logged in successfully' });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};


module.exports = { registerUser, loginUser };
