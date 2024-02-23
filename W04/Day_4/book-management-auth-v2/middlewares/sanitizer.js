const xss = require("xss")
exports.sanitize = (req, res, next) => {
    const fields = ['title','author','publication_year','description','genre', 'username', 'email', 'password']
    for(i in fields) {
        if(req.body[fields[i]]) {
            req.body[fields[i]] = xss(req.body[fields[i]])
        }
    }
    next()
}