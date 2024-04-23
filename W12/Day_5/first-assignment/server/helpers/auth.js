// Authentication middleware: Making sure the user is who he claims to be.
// Not sure if the status should be 03 or 01.
async function isAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  return res.status(403).json({ message: "Unauthorized" });
}

module.exports = {
  isAuth,
};
