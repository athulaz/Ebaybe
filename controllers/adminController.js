// controllers/adminController.js
const User = require('../models/userModel');

// Get all users (admin only)
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, 'name email isAdmin');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error: error.message });
  }
};

// Block a user (admin only)
const blockUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (user) {
      user.isBlocked = true;
      await user.save();
      res.status(200).json({ message: 'User blocked successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to block user', error: error.message });
  }
};

// Unblock a user (admin only)
const unblockUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (user) {
      user.isBlocked = false;
      await user.save();
      res.status(200).json({ message: 'User unblocked successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to unblock user', error: error.message });
  }
};

module.exports = { getAllUsers, blockUser, unblockUser };
