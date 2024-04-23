const express = require("express");
const cors = require("cors");
const flash = require('connect-flash');
const session = require('./config/session');
const passport = require("passport");
const contactRouter = require("./controllers/contact");
const userRouter = require("./controllers/user");
const { logger, requestLogger } = require("./config/winston");
require('./config/db');
require('./config/passport');

const app = express();
const port = process.env.NODE_PORT;

app.use(flash());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true }));

app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(requestLogger);

app.use('/api/contacts', contactRouter);
app.use('/api/auth', userRouter);

app.listen(port, () => logger.log("info", `Server running on ${port}...`));
