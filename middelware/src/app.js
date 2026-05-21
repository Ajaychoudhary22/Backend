const express = require('express');
const routeIndex = require('./routes/routeIndex');

const app = express();

app.use((req, res, next) => {
    console.log("app is between the middleware");
    next();
});

app.use("/", routeIndex);

module.exports = app;