const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getSingleTask,
  updateTask,
  createTask,
  deleteTask,
} = require("../controllers/task");
const middleware = require("../middleware/auth");

router.use(middleware);

router.get("/", getAllTasks);
router.get("/:id", getSingleTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
