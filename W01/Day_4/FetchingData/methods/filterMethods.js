const filterByCategory = (products, category) => {
    return products.filter(
        (element) => element.cateogory == category
    )
}

module.exports = {
    filterByCategory
}