require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./src/routes/task");
const authRoutes = require("./src/routes/auth");

const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Welcome to the Task Manager API");
});

app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(
    console.log("Connected to MongoDB successfully 🚀"),
    app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);
    })
  )
  .catch((error) => console.log(error));
