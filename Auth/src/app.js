const express = require('express');

const authRoute = require('./route/auth.route');

const app = express();

app.use(express.json());

app.use('/auth', authRoute);





exports = module.exports = app;