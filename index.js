const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const path = require("path");
require('./models/Task');

mongoose.connect(keys.mongoURL, { useNewUrlParser: true });

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());
require('./routes/taskRouter')(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Сервер запущен"));