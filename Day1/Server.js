const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hellooooo, World!');
});
server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});


