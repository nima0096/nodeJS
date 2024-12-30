const http = require("http");

const PORT = 8000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-type", "text/plain");
  response.end("heeeeeey pinecone!");
});

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
