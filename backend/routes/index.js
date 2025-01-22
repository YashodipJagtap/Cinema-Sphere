//index.js
const express = require('express');
const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');

const router = express.Router();

// Admin login route
router.post('/checkAdmin', async (req, res) => {
  const { email, password, key } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, msg: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch || key !== 'yashodip123') {
      return res.json({ success: false, msg: 'Invalid credentials' });
    }

    return res.json({ success: true, msg: 'Admin login successful' });
  } catch (error) {
    console.error('Error during admin login:', error);
    return res.status(500).json({ success: false, msg: 'Failed to log in' });
  }
});

module.exports = router;