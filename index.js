'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/prueba', function(req, res){
    res.send({message: "Hola mundo", result: true})
});

app.listen(3000, function(){
    console.log('Api rest favoritos funcionando en el browser');
});
