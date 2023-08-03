const http = require('http');
const fs = require('fs');
const hostName = '127.0.0.1'; 
const PORT = process.env.PORT;

const myServer = http.createServer((req, res) => {

  const handleReadFile = (statusCode, htmlFile,req,res) => {
    fs.readFile(htmlFile, (err, data) => {
      res.writeHead(statusCode, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    })
  };
  
  if (req.url === '/') {
    handleReadFile(200,'index.html',req,res);
  }
  else if (req.url === '/about') {
    handleReadFile(200,'about.html',req,res);
  }
  else if (req.url === '/contact',req,res) {
    handleReadFile(200,'contact.html');
  }
  else {
    handleReadFile(404,'error.html',req,res);
  }
});

myServer.listen(PORT, hostName, () => {
  console.log(`successfully run server on port http://${hostName}:${PORT}`);
});


