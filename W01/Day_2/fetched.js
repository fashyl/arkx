async function fetchUserData(url) {
    const fetchResult = await fetch(url);
    const products = await fetchResult.json();
    return products;
}

module.exports = {
    fetchUserData
}