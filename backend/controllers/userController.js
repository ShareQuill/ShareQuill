const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.signupUser = async (req, res) => {
  const allowedKeys = ['username', 'email', 'password'];
  const receivedKeys = Object.keys(req.body);
  const invalidKeys = receivedKeys.filter((key) => !allowedKeys.includes(key));

  if (invalidKeys.length > 0) {
    return res.status(400).json({ message: 'Invalid parameters in the request body' });
  }
  
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(201).json({ message: 'User already exists' });
      return;
    }

    const user = new User({ username, email, password });
    const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_KEY, { expiresIn: '1h' });  
    await user.save();

    res.cookie('userAccessToken', token, { httpOnly: true, maxAge: 3600000, secure: true });

    res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.editUser = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    user.username = username;
    user.password = password; 
    await user.save();
    res.json({ message: 'User details updated successfully' });
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};

exports.deleteUser = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOneAndDelete({ email });
    if (!user) {
      throw new Error('User not found');
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }
    
    const isPasswordMatch = password === user.password;
    if (!isPasswordMatch) {
      throw new Error('Invalid password');
    }
    res.json({ message: 'Login successful'});
  } catch (error) {
    console.log(error)
    res.status(401).json({ message: 'Authentication failed' });
  }
};