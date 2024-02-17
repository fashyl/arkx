const multer  = require('multer') 

// uploader for the destination uploads
const uploader1 = multer({ dest: 'uploads/' }) // 


// CURRENT_DATE + FILENAME to avoid overwriting existing files
const storage = multer.diskStorage({
    destination: ( req, file, cb ) => {
        cb(null, 'images/');
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})

// uploader using the multer.diskStorage for the destination images
const uploader2 = multer({ storage: storage });

module.exports = {
    uploader1,
    uploader2
}