const mongoose = require("mongoose");

const Task = mongoose.model("task");

module.exports = app => {
  app.post("/api/task", async (req, res) => {
    const { title } = req.body;
    const id = Math.floor(Math.random() * 1000);
    try {
      const task = new Task({
        description: title,
        completed: false,
        id
      });

      await task.save();
      res.status(200).send(task);
    } catch (error) {
      res.send(error);
    }
  });

  app.get("/api/tasks", async (req, res) => {
    try {
      const task = await Task.find();

      res.send(task);
    } catch (error) {
      res.send(error);
    }
  });

  app.put("/api/tasks", async (req, res) => {
    try {
      const { id } = req.body;

      const task = await Task.findOneAndDelete({ id });

      await task.save();
      res.send(task);
    } catch (error) {
      res.send(error);
    }
  });

  app.patch("/api/task", async (req, res) => {
    try {
      const { id } = req.body;

      const task = await Task.findOne({ id });

      task.completed = !task.completed;

      await task.save();

      res.send(task);
    } catch (error) {
      res.send(error)
    }
  }) 
};
