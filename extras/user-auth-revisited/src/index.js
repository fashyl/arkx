const express = require("express");
const passport = require("passport");
const router = require("./routes/user_routes");
const { sesh } = require("../config/session");
const { logger, requestLogger } = require("../config/winston");
require("dotenv").config({ path: "../.env" });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const host = process.env.HOST;
const port = process.env.PORT;

require("../config/db");
require("../config/passport");
app.use(requestLogger);
app.use(sesh);
app.use(passport.initialize());
app.use(passport.session());
app.use(router);

app.listen(port, () => logger.log('info',`App running on http://${host}:${port}`));
