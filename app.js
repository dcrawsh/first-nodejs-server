const express = require('express');
const app = express();
const port = 3001;

app.get('/other',(req,res,next) => {
    console.log('other');
    res.send('<h1>This is the other</h1>');
})
app.get('/',(req,res,next) => {
    console.log(root);
    res.send('<h1>This is the root</h1>');
})

app.listen(port);