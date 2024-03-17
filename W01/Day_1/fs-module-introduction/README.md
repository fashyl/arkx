## Daily Challenge
### Setup:
Create a new Node.js project. Include necessary modules like fs for file operations.

- **File Reading Function:** Write a function `readFileAsync` that takes a file path as an argument and returns a Promise. This function should use `fs.readFile` to read the file asynchronously. Handle any errors that might occur (e.g., file not found) and return an appropriate message.
- **File Writing Function:** Implement a function `writeFileAsync` that takes a file path and content as arguments and writes to the file asynchronously using fs.writeFile. It should return a Promise. Include error handling for potential issues like write permissions.
- **Processing Logic:** Develop a function `processFiles` that:
	- Reads multiple text files (you can create some sample text files in your project).
	- Manipulates the content of these files in some way (e.g., adding a timestamp, reversing the content, converting it to uppercase).
	- Writes the modified content to new files.
- **Module Export:** Structure your functions (`readFileAsync`, `writeFileAsync`, and `processFiles`) in separate JS modules and export them. This will demonstrate your understanding of JS modules.
- **Main Application File:** In your main application file (e.g., index.js), import your modules and call `processFiles`. Use async/await syntax for cleaner and more readable asynchronous code.