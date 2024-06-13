const lodash = require('lodash');

function home(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Home page');
}

function about(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('About page');
}

function test(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('mean:');
}

function user(req, res) {
    let url = new URL(req.url, `http://${req.headers.host}`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`User page, id = ${url.searchParams.get('id')}`);
}

function notfound(req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('404 Not found!')
}

module.exports = { home, about, user, notfound, test };