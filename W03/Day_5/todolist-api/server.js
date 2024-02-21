const express = require('express');
const router = require('./routes/to-dos');
const { logger } = require('./middlewares/authenticator');
require('dotenv').config();

const app = express()
const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs');

app.use('/', logger, router);

app.listen(port, () => {
    console.log(`Server listening at http://${host}:${port}..`);
});