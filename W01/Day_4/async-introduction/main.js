const { fetchData } = require("./api/fetchData");
const { filterByCategory } = require("./methods/filterMethods");

// Specify which method and it's relevent arg (third argument of main())
// Methods are as follow : 
//  - filter, takes category as argument (:string)
//  - search, takes keyword as argument (:string)
//  - sort, takes the sorting order as argument (:number > 0 Asc, < 0 Desc)
//  - average, takes no third argument.
//  - display, which displays the data unless fed an id. (:number)


const main = async (url, key, arg) => {
    // Fetch data from the API.
    try {
        const response = await fetchData(url)
        switch (key) {
            case 'display':
                console.log(response);
                break;
            case "filter":
                const electronics = filterByCategory(response, "electronics");
                console.log(electronics)
                break;
            default:
                console.error('Unknown method, try "display"')
        }
    } catch (error) {
        console.log(error.message)
    }
}

main("https://fakestoreapi.com/products", "filter", "electronics")