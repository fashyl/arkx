const readline = require("readline");
const XLSX = require("xlsx");

// class Contact {
//   constructor(name, phone) {
//     this.name = name;
//     this.phone = phone;
//   }
//   async addContact() {
//     // Create the readline interface
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
//     // Smya,
//     this.name = await rl.question("Name : ");
//     this.phone = await rl.question("Phone Number : ");

//     rl.close();
//     return this;
//   }
// }

// const Contacts = new Contact('Souhail', '153-356-289');
// await Contacts.addContact();
// console.log(Contacts);

var Contacts = [
  {
    contact: "Souhail",
    phone: "163-277-388",
  },
  {
    contact: "Flan",
    phone: "163-467-388",
  },
  {
    contact: "Sanfo7i",
    phone: "999-277-388",
  },
  {
    contact: "Pinux",
    phone: "567-222-010",
  },
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

function showMenu() {


}


function addContact() {
  return new Promise((resolve, reject) => {
    // interface
    rl.question("Name : ", (contact) => {
      rl.question("Number : ", (phone) => {
        rl.close();
        if (!contact && !phone) {
          reject(new Error("Wa diir chi 7aja a La7ya."));
        } else {
          resolve({ contact, phone });
        }
      });
    });
  });
}

function displayContacts(array) {
  console.table(array); // That's all. (.-.)
}

function searchContacts(array, keyword) {
  var matchingContacts = [];
  var regex = new RegExp(keyword, "gi");
  array.forEach((element) => {
    console.log(element);
    if (regex.test(element.contact)) {
      matchingContacts.push(element);
    }
  });
  return matchingContacts;
}

function exit() {
    rl.close;
}

// async function frAddContact()
addContact()
  .then(({ contact, phone }) => {
    Contacts.push({ contact, phone });

  })
  .catch((err) => console.log(err.message));