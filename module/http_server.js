const http = require('http');

const hostname = '127.0.0.1';
const port = 3300;


const myServer = http.createServer((req, res) => {

  res.end('<h1>Hello. I am your fisrt server</h1>');
});

myServer.listen(port, hostname, () =>{
  console.log(`Your server is successfully running in http://${hostname}:${port}`);
})