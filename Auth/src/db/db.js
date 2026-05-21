const mongoose = require('mongoose');


const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });
}

exports = module.exports = connectDB;