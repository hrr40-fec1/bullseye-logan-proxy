const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(proxy('http://localhost:3000/api/product', {target: 'http://localhost:3004'}));
app.use(proxy('http://localhost:3000/api/images', {target: 'http://localhost:3003'}));
app.use(proxy('http://localhost:3000/api/checkout', {target: 'http://localhost:3002'}));
app.use(proxy('http://localhost:3000', {target: 'http://localhost:3001'}));


app.listen(port, () => console.log(`Bullseye app listening on port ${port}!`))