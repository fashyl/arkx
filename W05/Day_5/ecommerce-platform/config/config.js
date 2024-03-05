require('dotenv').config()

exports.config = {
    port: process.env.PORT,
    databaseUrl: process.env.MONGODB_URI,
    jwtPrivateKey: process.env.JWT_PRIVATE_KEY,
    mailAddress: process.env._EMAIL_ADRESS,
    mailAppPass: process.env._APP_PASSWORD
  };