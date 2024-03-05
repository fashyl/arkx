const multer = require("multer");
const xss = require("xss");
var path = require("path");

const registerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: async (req, file, cb) => {
    if (req.body.username) {
      cb(
        null,
        xss(req.body.username) +
          "-" +
          "profile" +
          path.extname(file.originalname)
      );
    }
  },
});

const updateStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: async (req, file, cb) => {
    cb(
      null,
      req.user.userId + "-" + "profile" + path.extname(file.originalname)
    );
  },
});

const registerPic = multer({ storage: registerStorage });
const updatePic = multer({ storage: updateStorage });
module.exports = {
  registerPic,
  updatePic,
};
