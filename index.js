const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (request, response) => {
  response.send("GET request received at '/'path");
});
app.post("/", (request, response) => {
  response.send("POST request received at '/'path");
});
app.put("/", (request, response) => {
  response.send("PUT request received at '/'path");
});
app.delete("/", (request, response) => {
  response.send("DELETE request received at '/'path");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
