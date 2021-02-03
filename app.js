const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const port = 3001;

app.use(bodyParser.urlencoded({extended: false}));

app.use(shopRoutes);
app.use(adminRoutes);








app.listen(port);