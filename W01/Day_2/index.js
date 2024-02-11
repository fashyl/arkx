const { filterUserData } = require('./filtered')
const { fetchUserData } = require('./fetched')

async function processData() {
    try {
        const products = await fetchUserData("https://fakestoreapi.com/products");
        const goodDeals = filterUserData(products, "jewelery");
        console.log(goodDeals);
    } 
    catch (error) {
        console.error('Error fetching or processing data:', error);
    }
}

processData();
