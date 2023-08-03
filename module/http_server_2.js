const http = require('http');

const hostname = '127.0.0.1';
const port = 3300;


const myServer = http.createServer((req, res) => {
  res.writeHead(202, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello. I am your first server</h1>');
  res.write('<h1>Hello. I am your first server</h1>');
  res.end();
});

myServer.listen(port, hostname, () =>{
  console.log(`Your server is successfully running in http://${hostname}:${port}`);
})