const http = require('http');

const server = http.createServer((req, res) => {
  // Set a timeout for the request
  req.setTimeout(3000, () => {
    console.error('Request timed out');
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Request timed out');
  });

  // Simulate a delay to mimic a long-running process
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000); // Simulate a 5-second delay
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});