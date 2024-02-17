# Multer
Multer is a node.js middleware for handling `multipart/form-data`, which is primarily used for uploading files.

**NOTE**: Multer will not process any form which is not multipart (`multipart/form-data`).

## Installation

```sh
$ npm install --save multer
```

## Usage

Multer adds a `body` object and a `file` or `files` object to the `request` object. The `body` object contains the values of the text fields of the form, the `file` or `files` object contains the files uploaded via the form.

Basic usage example:

```javascript
const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' }) // Destination Folder for the uploaded files.

const app = express()

// Postman -> Request -> Body -> form-data -> key: avatar file: uploadih..
app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  console.log(req.file);
})

// Postman -> Request -> Body -> form-data -> key: photo file(s): uploadihom..
app.post('/photos/upload', upload.array('photo', 12), function (req, res, next) {
  // req.files is array of `photos` files
  console.log(req.files) // file(s)!
})

```