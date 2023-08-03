const http = require('http');
const fs = require('fs');
const hostName = '127.0.0.1';
const port = 3300;

const myServer = http.createServer((req, res) => {

  const handleReadFile = (statusCode, htmlFile) => {
    fs.readFile(htmlFile, (err, data) => {
      res.writeHead(statusCode, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    })
  };
  
  if (req.url === '/') {
    handleReadFile(200,'index.html');
  }
  else if (req.url === '/about') {
    handleReadFile(200,'about.html');
  }
  else if (req.url === '/contact') {
    handleReadFile(200,'contact.html');
  }
  else {
    handleReadFile(404,'error.html');
  }
});

myServer.listen(port, hostName, () => {
  console.log(`successfully run server on port http://${hostName}:${port}`);
});


