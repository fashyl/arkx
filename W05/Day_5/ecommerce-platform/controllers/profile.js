//   controllers related to user profiles, such as
//   retrieving profile information, updating and deleting profiles.
const { User } = require("../models/schemas/user");
const { codes, messages } = require("../config/http");
const { hashiL } = require("../helpers/bcrypt");

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.userId });
    if (!user) return res.status(codes.NOT_FOUND).send("User not found.");
    const userProfile = {
      username: user.username,
      email: user.email,
      age: user.age,
      country: user.country,
      sex: user.sex,
      phoneNumber: user.phoneNumber,
      bio: user.fields.bio,
      picture: user.profile_pic, // req.file wa haablatiiiiiiii
    };
    res.status(codes.OK).json(userProfile);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res
      .status(codes.INTERNAL_SERVER_ERROR)
      .send(
        "An error occurred while fetching user profile. Please try again later."
      );
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const update = {
      updatedAt: Date.now(),
    };
    const options = {
      returnNewDocument: true,
      projection: { _id: 0 }, // STILL INCLUDES THE ID
    };
    // Check if each field exists in the req.body and add it to the update object if present
    if (req.body.username) { update.username = req.body.username; options.projection.username = 1; }
    if (req.body.email) { update.email = req.body.email; options.projection.email = 1; }
    if (req.body.password) { update.password = await hashiL(req.body.password); options.projection.password = 1; }
    if (req.body.age) { update.age = req.body.age; options.projection.age = 1; }
    if (req.body.country) { update.country = req.body.country; options.projection.country = 1; }
    if (req.body.sex) { update.sex = req.body.sex; options.projection.sex = 1; }
    if (req.body.phoneNumber) { update.phoneNumber = req.body.phoneNumber; options.projection.phoneNumber = 1; }
    if (req.body.bio) { update.fields = { bio: req.body.bio }; options.projection.fields = 1; }
    if (req.file) { update.profile_pic = req.file.filename; options.projection.profile_pic = 1; }

    const user = await User.findOneAndUpdate(
      { _id: req.user.userId },
      update,
      options
    );

    // Ghan7yd jdha manually
    const updated = user.toObject();
    delete updated._id;

    if (!user) return res.status(codes.NOT_FOUND).send("User not found."); // ;_; but ur logged in
    res.status(codes.OK).json(updated);
  } catch (error) {
    console.log("Error updating user: ", error);
    if (error.name === "ValidationError" || error.name == "CastError") {
      res
        .status(codes.BAD_REQUEST)
        .send("Invalid user data. Please provide all required fields.");
    } else {
      res.status(codes.INTERNAL_SERVER_ERROR).send(messages[500]);
    }
  }
};

exports.deleteUserProfile = async (req, res) => {
  try {
    const deleted = await User.findOneAndDelete({ _id: req.user.userId });
    if (!deleted) return res.status(codes.NOT_FOUND).send("User not found.");
    res
      .status(codes.OK)
      .send(
        `User ${JSON.stringify(
          deleted.username
        )}s profile deleted successfully.`
      );
  } catch (error) {
    console.error("Error deleting user profile:", error);
    res
      .status(codes.INTERNAL_SERVER_ERROR)
      .send(
        "An error occurred while deleting user profile. Please try again later."
      );
  }
};
