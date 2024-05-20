const passport = require("passport");
const User = require("../models/user_model");

exports.register = async (req, res, next) => {
  try {
    const newUser = new User({
      password: req.body.password,
      email: req.body.email,
      username: req.body.username,
      admin: true,
    });

    const user = await newUser.save();
    res.redirect("/login");
    
  } catch (error) {
    res.status(500).json(error);
  }
};
