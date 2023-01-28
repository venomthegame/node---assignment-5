
const http = require("http");
const port = 8081;
const httpServer = http.createServer(handleServer);
function handleServer(req, res) {
    if (req.url === '/welcome') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to Dominos!');
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ phone: '18602100000', email: 'guestcaredominos@jublfood.com' }));
    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
    

}
httpServer.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

module.exports = httpServer;