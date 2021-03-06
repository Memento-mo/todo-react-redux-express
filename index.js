const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const path = require("path");
require('./models/Task');

mongoose.connect(keys.mongoURL, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));
require('./routes/taskRouter')(app);


// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));

//   const path = require('path');
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Сервер запущен"));