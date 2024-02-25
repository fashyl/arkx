## Weather Endpoint
In this challenge, we will enhance our existing HTTP server (Seen previously "[NodeJS HTTP Server](https://arkx-academy.gitbook.io/nodjs-day5/course/nodejs-http-server#lets-see-how-it-works)" )  with a new endpoint called "weather." This endpoint will allow us to retrieve the weather temperature of a specific city by providing the city name as a query parameter.
### Requirements
- Upgrade your existing HTTP server code to include a new route for the "/weather" endpoint.
- When a request is made to the "/weather" endpoint, extract the city name from the query parameter.
- Use the city name to retrieve the weather temperature for that city from a weather API.
- Include the weather temperature in the response to the client.
- Ensure that the server handles potential errors gracefully and returns appropriate error messages if the city is not found or if there are any issues with the weather API request.
- Test the functionality by making requests to the "/weather" endpoint with different city names as query parameters.