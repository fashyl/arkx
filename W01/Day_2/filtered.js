const filterUserData= (products, category) => {
  // const filteredData = products.filter(product => product.price > 20 && product.price <= 75);
  const filteredData = products.filter(product => product.category = category)
  return filteredData;
}

module.exports = {
    filterUserData
}