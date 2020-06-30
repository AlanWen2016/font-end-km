const fs = require('fs')
const url  = require('url')
const queryString = require('querystring')
const express = require('express')



const app = new express();

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly')
    next();
  });

app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })
  
  // POST method route
  app.post('/', function (req, res) {
    res.send('POST request to the homepage')
  })

  var cb0 = function (req, res, next) {
    // res.send('CB0')

    console.log('CB0')
    next()
  }
  
  var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  var playerWinCount = 0
  
  app.get('/example/d', [cb0, cb1], function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
  }, function (req, res) {
    res.send('Hello from D!')
  })

  app.get('/game', 
  function (req, res, next) {
     res.increId = 1324;
     console.log('next 1')

     next()
     console.log('next 1.1')
  },
 
    function(req, res, next){
        console.log('next 2')
        if(playerWinCount >= 3){
            res.status(500)
            res.send('game is over')
            return 
        }
        next()
        console.log('next 2.2')
        if(res.playerWon){
            playerWinCount ++;
        }

    },
    function(req, res, next){
        console.log('next 3')

        setTimeout(()=>{
            if(Math.random() * 10 > 5){
                res.playerWon = true
            }else{
                res.playerWon = false
            }
        }, 500)
        next()
        console.log('next 3.3')

    },
    function(req, res, next){
        res.status(200)
        res.send('result'+ playerWinCount)
            return 
    },
  )


app.listen(3000);