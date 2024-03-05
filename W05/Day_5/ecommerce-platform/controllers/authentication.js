const { checkiL, hashiL } = require("../helpers/bcrypt");
const { User } = require("../models/schemas/user");
const { codes, messages } = require("../config/http");
const { sign } = require("../helpers/jwt.js");

//   authentication-related controllers such as login, registration, and logout.
exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if(!user) throw new Error("Invalid credentials.");
    const valid = await checkiL(password, user.password);
    if (!valid) throw new Error("Invalid credentials.");

    const token = sign({ userId: user._id });
    res.cookie("AUTH_TOKEN", token);
    res.status(codes.OK).send('You are logged in successfully'); // This works
    // res.status(codes.FOUND).redirect('/'); Postman does not automatically follow redirects like a web browser does.
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(codes.UNAUTHORIZED).send(error.message);
  }
};

exports.register = async (req, res, next) => {
  try {
    const { username, email, password, age, country, sex, phoneNumber } =
      req.body;

    // This is unnecessary, since MongoDB handles such cases with a specific error code 11000
    // const userExists = await User.findOne({ email });
    // if(userExists) throw new Error("User already exists, try logging in instead :)")

    const newUser = User({
      username,
      email,
      password: await hashiL(password),
      age,
      country,
      sex,
      phoneNumber,
      profile_pic: req.file.filename
    });

    await newUser.save();
    req.user = newUser; 
    next();
  } catch (error) {
    console.error("Error registering user:", error);
    if (error.name === "ValidationError" || error.name === "CastError") {
      res
        .status(codes.BAD_REQUEST)
        .send("Invalid registration data. Please provide valid information.");
    } else if (error.code === 11000 /*&& error.keyPattern.email*/) {
      // you can be more explicit using keyPattern
      // a property that contains the keys that violated the unique index constraint.
      res.status(codes.BAD_REQUEST).send("User already exists.");
    } else {
      res
        .status(codes.INTERNAL_SERVER_ERROR)
        .send(
          "An error occurred while registering the user. Please try again later."
        );
    }
  }
};

exports.logout = (req, res) => {
    res.cookie("AUTH_TOKEN", "", { expires: new Date(0) });
    res.status(codes.OK).send("Logout successful.");
  };