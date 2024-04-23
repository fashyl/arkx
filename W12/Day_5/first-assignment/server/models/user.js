const { default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt');
const { logger } = require("../config/winston");

const userSchema = mongoose.Schema({
  // Login Information
  username: {
    type: String,
    trim: true,
    unique: true,
    sparse: true,
    lowercase: true,
    match: [/[a-z_.0-9]/, "Invalid username format"],
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    sparse: true,
    lowercase: true,
    validate: {
      validator: (email) =>
        /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm.test(email),
      message: "Invalid email format",
    },
  },
});

userSchema.pre("save", async function(next) {
    try {
      const user = this;
      const hash = await bcrypt.hash(user.password, 10);
      user.password = hash;
        next();
    } catch (error) {
      next(error);  
    }
  })

userSchema.post('save', function(doc) {
    logger.log("info", '%s has been saved', doc._id);
  });

module.exports = mongoose.model("User", userSchema);
