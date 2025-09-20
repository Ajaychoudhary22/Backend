const http = require('http');

//here we are creating a server using http module
const server = http.createServer((req, res) => {
    res.end('Hellooooo, World!');  // through this line we can send the request to the server                                          
});
// here we are making the server to listen on port 8000
server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});


