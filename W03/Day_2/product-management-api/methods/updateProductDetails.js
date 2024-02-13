const products = require('../assets/listofproducts')

const updateProperty = (item, newPrice, newName, newStock, newDescription, newBrand, newId, newCategory) => {
    const product = products.find(product => product.id == item); // Using == for comparison
    if (product) {
        if (newStock) product.stock = newStock
        if (newBrand) product.brand = newBrand
        if (newPrice) product.price = newPrice
        if (newName) product.name = newName
        if (newDescription) product.description = newDescription
        if (newId) product.id = newId
        if (newCategory) product.category = newCategory
        return products;
    } else {
        console.log("Product not found."); 
    }
}

module.exports = {
    updateProperty
}
