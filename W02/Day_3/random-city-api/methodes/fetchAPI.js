async function fetchAPI(latitude, longitude) {
  const urlResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const cityObject = await urlResponse.json();
  return cityObject;
}

module.exports = {
   fetchAPI
}