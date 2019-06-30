const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  completed: {
    default: false,
    type: Boolean
  },
  description: String,
  id: Number
});

mongoose.model('task', taskSchema);