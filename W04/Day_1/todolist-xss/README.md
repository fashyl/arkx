## Overview
express-validator is a set of express.js middlewares that wraps the extensive collection of validators and sanitizers offered by **validator.js**.

It allows you to combine them in many ways so that you can validate and sanitize your express requests, and offers tools to determine if the request is valid or not, which data was matched according to your validators, and so on.

## Setup
```js
const express = require('express');
const app = express();

app.use(express.json());
app.get('/hello', (req, res) => {
  res.send(`Hello, ${req.query.person}!`);
});

app.listen(3000);
```
Run the file by executing node index.js. The HTTP server should be running, and you can open http://localhost:3000/hello?person=John to salute John!

## Adding a validator
**Install** using `npm i express-validator`. 
```js
const express = require('express');
const { query } = require('express-validator'); // 3yt lih
const app = express();

app.use(express.json());
app.get('/hello', query('person').notEmpty(), (req, res) => { // checks that the person 
                                                              // query string cannot be empty,
  res.send(`Hello, ${req.query.person}!`);
});

app.listen(3000);
```
Now, restart your application, and go to http://localhost:3000/hello again. Hmm, it still prints "Hello, undefined!"... why?

## Handling validation errors
**express-validator validators do not report validation errors to users automatically**.
The reason for this is simple: as you add more validators, or for more fields, how do you want to collect the errors? Do you want a list of all errors, only one per field, only one overall...?

So the next obvious step is to change the above code again, this time verifying the validation result with the validationResult function:

```js
const express = require('express');
const { query, validationResult } = require('express-validator'); // 3yt lih
const app = express();

app.use(express.json());
app.get('/hello', query('person').notEmpty(), (req, res) => {
  //
  const result = validationResult(req);
  if (result.isEmpty()) {
    return res.send(`Hello, ${req.query.person}!`);
  }

  res.send({ errors: result.array() });
  //
});

app.listen(3000);
```
Now if you access [http://localhost:3000/hello](http://localhost:3000/hello) again, what you'll see is the following JSON content:

```js
{  
"errors": [  
      { // 1. there's been exactly one error in this request;            
      "location": "query",  // 4. it's located in the query string (location: "query");
      "msg": "Invalid value", // 5.  the error message that was given was Invalid value.
      "path": "person", // 3. this field is called person;
      "type": "field" // 2. the error is in a field (type: "field");
      }  
  ]  
}
```

## Sanitizing inputs
While the user can no longer send empty person names, it can still inject HTML into your page! This is known as the [Cross-Site Scripting vulnerability (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting).

Let's see how it works. Go to [http://localhost:3000/hello?person=<b>John</b>](http://localhost:3000/hello?person=%3Cb%3EJohn%3C/b%3E), and you should see "Hello, **John**!".

While this example is fine, an attacker could change the `person` query string to a `<script>` tag which loads its own JavaScript that could be harmful.

In this scenario, one way to mitigate the issue with express-validator is to use a **sanitizer**, most specifically `escape`, **which transforms special HTML characters with others that can be represented as text**.

```js
const express = require('express');
const { query, validationResult } = require('express-validator');
const app = express();

app.use(express.json());
app.get('/hello', query('person').notEmpty().escape(), (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return res.send(`Hello, ${req.query.person}!`);
  }

  res.send({ errors: result.array() });
});

app.listen(3000);
```
Now, if you restart the server and refresh the page, what you'll see is "Hello, <b>John</b>!". Our example page is no longer vulnerable to XSS!

## Accessing validated data
This application is pretty simple, but as you start growing it, it might become quite repetitive to type req.body.fieldName1, req.body.fieldName2, and so on.

To help with this, you can use `matchedData()`, which automatically collects all data that express-validator has validated and/or sanitized:

```js
const express = require('express');
const { query, matchedData, validationResult } = require('express-validator');
const app = express();

app.use(express.json());
app.get('/hello', query('person').notEmpty().escape(), (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    const data = matchedData(req);
    return res.send(`Hello, ${data.person}!`);
  }

  res.send({ errors: result.array() });
});

app.listen(3000);
```

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