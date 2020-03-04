// include dependencies
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly')
    next();
  });
app.use('*', createProxyMiddleware({ target: 'http://localhost:3333/', changeOrigin: true }));
  
// app.get('/hello', (req, res) => res.json({res: 'Hello World! server1'}))
app.listen(3000);