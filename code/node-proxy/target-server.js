const express = require('express')
var cookieParser = require('cookie-parser')
 

const app = express()
app.use(cookieParser())

const port = 3333
app.post('/', function (req, res) {
    res.send('Got a POST request')
  })
app.get('*', (req, res) => {
    console.dir(req.cookies);
    let {originalUrl, baseUrl, hostname} = req;
    res.send({originalUrl, baseUrl, hostname});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
