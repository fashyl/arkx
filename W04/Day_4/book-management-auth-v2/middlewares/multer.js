const multer  = require('multer'); 
const xss = require('xss');
var path = require('path');

// CURRENT_DATE + FILENAME to avoid overwriting existing files
const storage = multer.diskStorage({
    destination: ( req, file, cb ) => {
        cb(null, '/home/dpnt/webdev/arkx/W04/Day_4/book-management-auth-v2/images/cover');
    },
    filename: async (req, file, cb) => {
        cb(null, xss(req.body.title).toLowerCase().replace(/\s/g, '-') + '-' + 'cover' + path.extname(file.originalname));
    }
})

// uploader using the multer.diskStorage for the destination images
const upload = multer({ storage: storage })
module.exports = upload;