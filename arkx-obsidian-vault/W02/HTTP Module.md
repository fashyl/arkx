---
aliases: 
tags:
  - type/concept
  - category/nodejs
links:
  - "[[NodeJS]]"
resources: 
updated: 2024-02-09T15:40
dateCreated: 2024-02-08T15:37
---
# HTTP Module
## Practice : POST method

> In computing, **POST** is a request method supported by HTTP used by the World Wide Web.
>
> By design, the **POST** request method requests that a web server accept the data enclosed in the body of the request message, most likely for storing it. It is often used when uploading a file or when submitting a completed web form.
>
> In contrast, the HTTP **GET** request method retrieves information from the server. As part of a **GET** request, some data can be passed within the URL's query string, specifying (for example) search terms, date ranges, or other information that defines the query.
>
> As part of a **POST** request, an arbitrary amount of data of any type can be sent to the server in the body of the request message. A header field in the **POST** request usually indicates the message body's Internet media type.
>
> [Wikipedia](https://en.wikipedia.org/wiki/POST%20(HTTP))

**Challenge Description:**
You are tasked with creating a Node.js challenge where users must send data through Postman. The data they send should consist of a single number. Upon receiving this number, your Node.js server will generate a random number. If the user's number matches the generated one, they will be redirected to a success endpoint; otherwise, they will be redirected to a failure endpoint.

**Folder Structure**
		- Markdown
		- Config
			- .env
		- Methods
			- numberGenerator.js
		- server.js

**Method Implementation:**
In the methods folder, create a file named numberGenerator.js. This file will contain a method to generate a random number.

**Challenge Endpoint:**
Your challenge will be accessible through a POST request to the /challenge endpoint. Users will send their data (a single number) to this endpoint via Postman.

**Success and Failure Endpoints:**
Upon submission of the number, users will be redirected to either a success or failure endpoint, depending on whether their number matches the generated one.

**Requirements:**
1. Your challenge should be implemented using Node.js.
2. Specific required packages include nodemon for development purposes.
3. Ensure the ability to read data from the request body.
4. By following these instructions, you'll create a Node.js challenge where users can test their luck against a randomly generated number.

