/*
# Build a Contact List
Build a Node.js application that allows users to store and retrieve contacts. Each contact should have a name and a phone number. The application should provide the following functionalities:
>- Add a contact: Prompt the user to enter a name and phone number, then store it in a collection (e.g., an array or object).
>- View all contacts: Display a list of all the stored contacts, showing both the name and phone number.
>- Search for a contact: Prompt the user to enter a name and search for the contact in the collection. If found, display the name and phone number. If not found, display a message indicating that the contact was not found.
>- Exit the application: Allow the user to exit the application gracefully.
Reuse and extend the code from the 'Node.js Readline module' example.
*/

var number = function(busStops){
    const newArray = busStops.map((element) => element[0] - element[1]);
    return newArray.reduce((acc, current) => acc + current, 0);
  } 

 console.log(number([[10,0],[3,5],[5,8]]));

// You can clean things up
// var number = function(busStops){
//   return busStops.map(x => x[0] - x[1]).reduce( (x, y) => x + y);
//}

// Or Even
// const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)
// Using destructuring
// const number = busStops => busStops.reduce((p, [on, off]) => p + on - off, 0); 