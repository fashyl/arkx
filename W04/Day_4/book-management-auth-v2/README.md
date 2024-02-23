# Book Management System Challenge

## Introduction
You are tasked with creating a simple book management system using Express.js, Axios, JSON-server, and EJS templating engine. This challenge will test your ability to implement CRUD (Create, Read, Update, Delete) operations on a collection of books stored in a JSON file using RESTful API endpoints.

Add authentification integrating uuid and hashed passwords.

## UUID
A Node.js module for generating and validation V4 UUIDs. **Install** using `$ npm install uuid4`.
### Usage
```js
import uuid4 from "uuid4";

// Generate a new UUID
var id = uuid4();

// Validate a UUID as proper V4 format (case-insensitive)
uuid4.valid(id); // true
```

## bcrypt
A library to help you hash passwords. Install via NPM : `npm install bcrypt`
### async (recommended)

```js
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
```

#### To hash a password:

Technique 1 (generate a salt and hash on separate function calls):

```js
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});
```

Technique 2 (auto-gen a salt and hash):

```js
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});
```

Note that both techniques achieve the same end-result.

#### To check a password:

```js
// Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // result == true
});
bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
    // result == false
});
```