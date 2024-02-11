---
aliases: 
tags:
  - type/concept
  - category/nodejs
links:
  - "[[NodeJS]]"
resources: https://www.geeksforgeeks.org/node-js-file-system/
updated: 2024-02-08T19:55
dateCreated: 2024-02-07T15:44
---

Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js helps developers to write JavaScript code to run on the server-side, to generate dynamic content and deliver to the web clients. The two features that make Node.js stand-out are:

-   Event-driven
-   Non-blocking I/O model

**About Node.js file system:** To handle file operations like creating, reading, deleting, etc., Node.js provides an inbuilt module called FS (File System). Node.js gives the functionality of file I/O by providing wrappers around the standard POSIX functions. All file system operations can have synchronous and asynchronous forms depending upon user requirements. To use this File System module, use the require() method:

```nodejs
var fs = require('fs');
```

**Common use for File System module:**

-   Read Files
-   Write Files
-   Append Files
-   Close Files
-   Delete Files

---

**What is Synchronous and Asynchronous approach?**

-   **Synchronous approach:** They are called **blocking functions** as it waits for each operation to complete, only after that, it executes the next operation, hence blocking the next command from execution i.e. a command will not be executed until & unless the query has finished executing to get all the result from previous commands.
-   **Asynchronous approach:** They are called **non-blocking functions** as it never waits for each operation to complete, rather it executes all operations in the first go itself. The result of each operation will be handled once the result is available i.e. each command will be executed soon after the execution of the previous command. While the previous command runs in the background and loads the result once it is finished processing the data.
-   **Use cases:**
    -   If your operations are not doing very heavy lifting like querying huge data from DB then go ahead with Synchronous way otherwise Asynchronous way.
    -   In an Asynchronous way, you can show some progress indicator to the user while in the background you can continue with your heavyweight works. This is an ideal scenario for GUI based apps.
-   **Example of asynchronous and synchronous:** Create a text file named **input.txt** with the following content:

```
GeeksforGeeks: A computer science portal
```

-   Now let us create a js file named **main.js** with the following code: 

-   javascript

`var` `fs = require("fs");`

`fs.readFile(``'input.txt'``,` `function` `(err, data) {`

   `if` `(err) {`

      `return` `console.error(err);`

   `}`

   `console.log("Asynchronous read: " + data.toString());`

`});`

-   **Output:**

```
Asynchronous read: GeeksforGeeks: A computer science portal
```

-   javascript

`var` `fs = require("fs");`

`var` `data = fs.readFileSync(``'input.txt'``);`

`console.log("Synchronous read: " + data.toString());`

-   **Output:**

```
Synchronous read: GeeksforGeeks: A computer science portal
```

---

**Open a File:** The fs.open() method is used to create, read, or write a file. The fs.readFile() method is only for reading the file and fs.writeFile() method is only for writing to the file, whereas fs.open() method does several operations on a file. First, we need to load the fs class which is a module to access the physical file system. **Syntax:**

```
fs.open(path, flags, mode, callback)
```

**Parameters:**

-   **path:** It holds the name of the file to read or the entire path if stored at other locations.
-   **flags:** Flags indicate the behavior of the file to be opened. All possible values are ( r, r+, rs, rs+, w, wx, w+, wx+, a, ax, a+, ax+).
-   **mode:** Sets the mode of file i.e. r-read, w-write, r+ -readwrite. It sets to default as readwrite.

-   err: If any error occurs.
-   data: Contents of the file. It is called after the open operation is executed.

**Example:** Let us create a js file named **main.js** having the following code to open a file **input.txt** for reading and writing. 

-   javascript

`var` `fs = require("fs");`

`console.log("opening file!");`

`fs.open(``'input.txt'``,` `'r+'``,` `function``(err, fd) {`

   `if` `(err) {`

      `return` `console.error(err);`

   `}`

   `console.log("File open successfully");`    

`});`

**Output:**

```
opening file!
File open successfully
```

---

**Reading a File:** The fs.read() method is used to read the file specified by fd. This method reads the entire file into the buffer. **Syntax:**

```
fs.read(fd, buffer, offset, length, position, callback)
```

**Parameters:**

-   **fd:** This is the file descriptor returned by fs.open() method.
-   **buffer:** This is the buffer that the data will be written to.
-   **offset:** This is the offset in the buffer to start writing at.
-   **length:** This is an integer specifying the number of bytes to read.
-   **position:** This is an integer specifying where to begin reading from in the file. If the position is null, data will be read from the current file position.
-   **callback:** It is a callback function that is called after reading of the file. It takes two parameters:
    -   **err:** If any error occurs.
    -   **data:** Contents of the file.

**Example:** Let us create a js file named **main.js** having the following code: 

-   javascript

`var` `fs = require("fs");`

`var` `buf =` `new` `Buffer(1024);`

`console.log("opening an existing file");`

`fs.open(``'input.txt'``,` `'r+'``,` `function``(err, fd) {`

   `if` `(err) {`

      `return` `console.error(err);`

   `}`

   `console.log("File opened successfully!");`

   `console.log("reading the file");`

   `fs.read(fd, buf, 0, buf.length, 0,` `function``(err, bytes){`

      `if` `(err){`

         `console.log(err);`

      `}`

      `console.log(bytes + " bytes read");`

      `if``(bytes > 0){`

         `console.log(buf.slice(0, bytes).toString());`

      `}`

   `});`

`});`

**Output:**

```
opening an existing file
File opened successfully!
reading the file
40 bytes read
GeeksforGeeks: A computer science portal
```

---

**Writing to a File:** This method will overwrite the file if the file already exists. The fs.writeFile() method is used to asynchronously write the specified data to a file. By default, the file would be replaced if it exists. The ‘options’ parameter can be used to modify the functionality of the method. **Syntax:**

```
fs.writeFile(path, data, options, callback)
```

**Parameters:**

-   **path:** It is a string, Buffer, URL, or file description integer that denotes the path of the file where it has to be written. Using a file descriptor will make it behave similarly to fs.write() method.
-   **data:** It is a string, Buffer, TypedArray, or DataView that will be written to the file.
-   **options:** It is a string or object that can be used to specify optional parameters that will affect the output. It has three optional parameters:
    -   **encoding:** It is a string value that specifies the encoding of the file. The default value is ‘utf8’.
    -   **mode:** It is an integer value that specifies the file mode. The default value is 0o666.
    -   **flag:** It is a string value that specifies the flag used while writing to the file. The default value is ‘w’.
-   **callback:** It is the function that would be called when the method is executed.
    -   **err:** It is an error that would be thrown if the operation fails.

**Example:** Let us create a js file named **main.js** having the following code: 

-   javascript

`var` `fs = require("fs");`

`console.log("writing into existing file");`

`fs.writeFile(``'input.txt'``,` `'Geeks For Geeks'``,` `function``(err) {`

   `if` `(err) {`

      `return` `console.error(err);`

   `}`

   `console.log("Data written successfully!");`

   `console.log("Let``'s read newly written data");`

   `fs.readFile('``input.txt',` `function` `(err, data) {`

      `if` `(err) {`

         `return` `console.error(err);`

      `}`

      `console.log("Asynchronous read: " + data.toString());`

   `});`

`});`

**Output:**

```
writing into existing file
Data written successfully!
Let's read newly written data
Asynchronous read: Geeks For Geeks
```

---

**Appending to a File:** The fs.appendFile() method is used to synchronously append the data to the file. **Syntax:**

```
fs.appendFile(filepath, data, options, callback);
```

or

```
fs.appendFileSync(filepath, data, options);
```

**Parameters:**

-   **filepath:** It is a String that specifies the file path.
-   **data:** It is mandatory and it contains the data that you append to the file.
-   **options:** It is an optional parameter that specifies the encoding/mode/flag.
-   **Callback:** Function is mandatory and is called when appending data to file is completed.

**Example 1:** Let us create a js file named **main.js** having the following code: 

-   javascript

`var` `fs = require(``'fs'``);`

`var` `data = "\nLearn Node.js";`

`fs.appendFile(``'input.txt'``, data,` `'utf8'``,`

    `function``(err) {`

        `if` `(err)` `throw` `err;`

        `console.log("Data is appended to file successfully.")`

`});`

**Output:**

```
Data is appended to file successfully.
```

**Example 1:** For synchronously appending 

-   javascript

`var` `fs = require(``'fs'``);`

`var` `data = "\nLearn Node.js";`

`fs.appendFileSync(``'input.txt'``, data,` `'utf8'``);`

`console.log("Data is appended to file successfully.")`

**Output:**

```
Data is appended to file successfully.
```

-   Before Appending Data to input.txt file:

```
GeeksforGeeks: A computer science portal 
```

-   After Appending Data to input.txt file:

```
GeeksforGeeks: A computer science portal
Learn Node.js
```

---

**Closing the File:** The fs.close() method is used to asynchronously close the given file descriptor thereby clearing the file that is associated with it. This will allow the file descriptor to be reused for other files. Calling fs.close() on a file descriptor while some other operation is being performed on it may lead to undefined behavior. **Syntax:**

```
fs.close(fd, callback)
```

**Parameters:**

-   **fd:** It is an integer that denotes the file descriptor of the file for which to be closed.
-   **callback:** It is a function that would be called when the method is executed.
    -   **err:** It is an error that would be thrown if the method fails.

**Example:** Let us create a js file named **main.js** having the following code: 

-   javascript

`fs.close(fd,` `function``(err) {`

   `if` `(err) {`

      `console.log(err);`

   `}`

   `console.log("File closed successfully.");`

`}`

**Output:**

```
File closed successfully.
```

---

**Delete a File:** The fs.unlink() method is used to remove a file or symbolic link from the filesystem. This function does not work on directories, therefore it is recommended to use fs.rmdir() to remove a directory. **Syntax:**

```
fs.unlink(path, callback)
```

**Parameters:**

-   **path:** It is a string, Buffer or URL which represents the file or symbolic link which has to be removed.
-   **callback:** It is a function that would be called when the method is executed.
    -   **err:** It is an error that would be thrown if the method fails.

**Example:** Let us create a js file named **main.js** having the following code: 

-   javascript

`var` `fs = require("fs");`

`console.log("deleting an existing file");`

`fs.unlink(``'input.txt'``,` `function``(err) {`

   `if` `(err) {`

      `return` `console.error(err);`

   `}`

   `console.log("File deleted successfully!");`

`});`

**Output:**

```
deleting an existing file
File deleted successfully!
```

  