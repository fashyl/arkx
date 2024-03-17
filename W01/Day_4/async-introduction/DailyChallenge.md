# Daily Challenge

### Objective
Create a JavaScript project that fetches product data from the [https://fakestoreapi.com/products](https://fakestoreapi.com/products "https://fakestoreapi.com/products"), applies various array methods, and organizes the code into distinct folders.

#### API
 **fetchData.js**: Contains a function fetchData(url) that takes a URL as a parameter and returns the fetched data. 
 
#### Methods
 **filterMethods.js**: Contains functions for filtering products. 
 **sortMethods.js**: Contains functions for sorting products. 
 **searchMethods.js**: Contains functions for searching products. 
 **calculationMethods.js**: Contains functions for calculating average, total, etc.

### Instructions
#### Setup
Create a new JavaScript project with the specified folder structure.

##### API Fetching
In the **api/fetchData.js** file, implement a function `fetchData(url)` that takes a URL as a parameter and uses fetch to get data from the FakeStoreAPI. Make use of async/await.

##### Filter Products by Category
In **methods/filterMethods.js**, implement a function` filterByCategory(products, category)` that filters products based on the specified category.

##### Sort Products by Price
In **methods/sortMethods.js**, implement functions `sortByPriceAsc(products)` and `sortByPriceDesc(products)` that sort products by price in ascending and descending order, respectively.

##### Search by Keyword

In **methods/searchMethods.js**, implement a function `searchByKeyword(products, keyword)` that searches for products containing the given keyword in their title or description.

##### Display Product Details
Create a separate file, e.g., **productDetails.js**, to handle the display of detailed information for a selected product.

##### Calculate Average Price
In **methods/calculationMethods.js**, implement a function `calculateAveragePrice(products)` that calculates and returns the average price of all products.

##### Organize Main Script
In your main script (e.g., index.js), import the functions from the respective folders and use them to demonstrate the following:
1. **Fetch data from the API.**
2. **Filter products by category.**
3. **Sort products by price.**
4. **Search for products by keyword.**
5. **Display detailed information for a selected product.**
6. **Calculate and log the average price of all products.**

### Comments
Ensure that your code is well-commented, explaining the purpose and functionality of each function.

### Bonus(Optional)
Implement additional methods or functionalities based on your creativity. Write unit tests for your functions.

### Submission
Share the project code repository (e.g., GitHub) with proper README instructions.
