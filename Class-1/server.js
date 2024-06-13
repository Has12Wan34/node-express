const http = require('http');
const { home, about, user, notfound, test } = require('./route/handlers');

const port = 3000;

const server = http.createServer((req, res) => {
    let url = new URL(req.url, `http://${req.headers.host}`);

    if (url.pathname == '/') {
        home(req, res);
    } else if (url.pathname == '/about') {
        about(req, res);
    } else if (url.pathname == '/user') {
        user(req, res);
    } else if (url.pathname == '/test') {
        test(req, res);
    } else {
        notfound(req, res);
    }
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
    console.log(process.argv);
});