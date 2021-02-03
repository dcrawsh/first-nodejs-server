const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;

app.use(bodyParser.urlencoded({extended: false}));



app.use('/add-product',(req,res,next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</form>');
});

app.post('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next) => {
    res.send('<h1>This is the root</h1>');
})

app.listen(port);