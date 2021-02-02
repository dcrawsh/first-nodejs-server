const http = require('http');

const express = require('express');

const app = express() ;

app.use((req,res,next) => {
    console.log('in the middle');
    next();
})
app.use((req,res,next) => {
    console.log('in a different middle');
    
})

const server = http.createServer(app);

server.listen(3001);