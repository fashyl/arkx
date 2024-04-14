module.exports.isAuth = (req, res, next) => {
    if(req.isAuthenticated()) return next();
    return res.status(403).send('<h1>Finawa ghadi!?</h1><br>Please <a href="/login">login</a>');
};