const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const port = 3001;

app.use(bodyParser.urlencoded({extended: false}));

app.use(shopRoutes);
app.use('/admin',adminRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});








app.listen(port);