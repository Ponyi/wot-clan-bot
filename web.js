const http = require('http');

const hostname = process.env.HOST || '0.0.0.0';//'discord-wot-clan-bot.herokuapp.com';
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});