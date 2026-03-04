// This is a basic HTTP server that listens on port 3000 and responds with 'Hello, World!' to any request.
// Ensure this aligns with the product manager's expectations for the feature.
// TODO: Confirm with the product manager if the response 'Hello, World!' meets the feature requirements.

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});