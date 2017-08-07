'use strict'

var app = require('./app');
var mongoose = require('mongoose');
var port = process.env.PORT || 3100;

mongoose.connect('mongodb://localhost:27017/favoritescourse', (err, res) => {
    if(err){
        throw err;
    }else{
        console.log('conexion a mongodb correcta');
        app.listen(port, function(){
            console.log('Api rest favoritos funcionando en el browser');
        });
    }
});