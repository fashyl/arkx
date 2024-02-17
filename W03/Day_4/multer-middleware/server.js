const express = require('express');
const { uploader1, uploader2 } = require('./middlewares/multer');

const app = express()

app.post('/profile', uploader1.single('image'), function (req, res) {
  // req.file is the `avatar` file
  console.log(req.file);
  console.log(req.body);
  // req.body will hold the text fields, if there were any
});

app.post('/notes/upload', uploader1.array('note', 2), function (req, res, next) {
  // req.files is array of `photos` files
  console.log(req.files);
  // req.body will contain the text fields, if there were any
});

app.post('/photos/upload', uploader2.array('image'), function (req, res) {
    // req.file is the `avatar` file
    console.log(req.files);
    console.log(req.body);
    // req.body will hold the text fields, if there were any
  });

app.listen(3030, () => {
    console.log('Listening on Port 3030...')
});

// const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
// app.post('/cool-profile', cpUpload, function (req, res, next) {
//   // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
//   //
//   // e.g.
//   //  req.files['avatar'][0] -> File
//   //  req.files['gallery'] -> Array
//   //
//   // req.body will contain the text fields, if there were any
// })