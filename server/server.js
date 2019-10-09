'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParse = require('body-parser');

const port = 3000;

app.use(bodyParse());
app.use(express.static('build'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => {
    console.log(`now listening on ${port}!`);
});
