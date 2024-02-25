# Random City Temperature Display
Your challenge is to create a program that randomly selects a city from a predefined list and retrieves the temperature data for that city from a weather API. You'll be utilizing asynchronous programming concepts, including promises and async/await, to fetch the temperature data and display it to the user.
## Requirements
- Create a list of cities with their corresponding names and IDs.
- Implement a function that randomly selects a city from the list.
- Make an asynchronous API call to fetch the temperature data for the selected city from a weather API of your choice.
- Extract the temperature value from the retrieved data.
- Display the city name and its temperature value to the user.

## Helpers
- [Opensource API](https://api.open-meteo.com/v1/forecast?latitude=XXXX&longitude=YYYY&current_weather=true) to retrieve data. For more information visit [link](https://open-meteo.com/en/docs).
​
### List of cities to be used
```js
const cities = [
  { name: 'New York', lat: 40.7128, lng: -74.0060 },
  { name: 'London', lat: 51.5074, lng: -0.1278 },
  { name: 'Paris', lat: 48.8566, lng: 2.3522 },
  { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
  { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
  { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
  { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
  { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
];
```
### Function to select a city randomly
```js
function selectRandomCity(cities) {
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}
```
### Code to fetch (Make an API Call) data
```js
const response = await fetch('https://api.example.com/data');
const data = await response.json();
console.log('Data:', data);Random City Temperature Display
```