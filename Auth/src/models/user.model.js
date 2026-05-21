const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: String,
    password: String

});

const Usermodel = mongoose.model('User', userSchema);

exports = module.exports = Usermodel;