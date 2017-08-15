'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const routes = require('./routes/routes');
const { mongoose } = require('./db/mongoose');

const app = express();
const port = process.env.PORT || 3000

app.use('/', express.static('public'));
app.use(bodyParser.json());
routes(app);

app.listen(port, function() {
    console.log(`The server is running on port ${port}!`);
});

module.exports = app;
