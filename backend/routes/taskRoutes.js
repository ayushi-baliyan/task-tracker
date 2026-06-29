const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// CREATE Task
router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET All Tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET Single Task
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE Task
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE Task
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;