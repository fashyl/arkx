function selectRandomCity(cities) {
   const randomIndex = Math.floor(Math.random() * cities.length);
   return cities[randomIndex];
 }

module.exports = {
   selectRandomCity
}