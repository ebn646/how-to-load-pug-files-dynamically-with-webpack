const express = require('express');


var app  = express();
app.set('view engine', 'pug');

app.get('/',(req,res, next) => {
    res.render('index',{})
})

app.listen(3000, function(){
    console.log('Server Started on Port 3000...')
})