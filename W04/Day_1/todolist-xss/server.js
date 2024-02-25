const express = require('express');
const router = require('./routes/to-dos');
const users_router = require('./routes/users')
const { logger } = require('./middlewares/authenticator');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express()
const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser()); 
app.set('view engine','ejs');

app.use('/', logger, users_router);
app.use('/', logger, router);

app.listen(port, () => {
    console.log(`Server listening at http://${host}:${port}..`);
});