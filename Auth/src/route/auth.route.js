const express = require('express');
const router = express.Router();

const Usermodel = require('../models/user.model');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {

    const { username, password } = req.body;
    const user = await Usermodel.create({ username, password });

    const token = jwt.sign({
        userId: user._id,
    }, process.env. JWT_SECRET, { expiresIn: '1h' });


    res.status(201).json({
        message: 'User registered successfully',
        token,
        user });

});
router.get('/users', async (req, res) => {
    const { token } = req.body;
    

    if (!token) {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const users = await Usermodel.findOne({
         _id: decoded.userId
    }).select('-password');
    res.status(200).json({
        message: 'Users retrieved successfully',
        users: users
    });

    } catch (error) {
        return res.status(401).json({
            message: 'Invalid token'
        });
    }
});


        // If the token is valid, you can now access the decoded user information
        // For example, you can use `decoded.userId` to get the user ID








router.post('/login', async (req, res) => {

    const { username, password } = req.body;

    const isUserExists = await Usermodel.findOne({ username:username, password:password });
    

    if (!isUserExists) {
        return res.status(404).json({
            message: 'User not found'
        });
    }
    const isPasswordMatch = isUserExists.password === password;

    if (!isPasswordMatch) {
        return res.status(401).json({
            message: 'Invalid password'
        });
    }
    res.status(200).json({
        message: 'User logged in successfully',
    
        user: isUserExists
    });
});

module.exports = router;