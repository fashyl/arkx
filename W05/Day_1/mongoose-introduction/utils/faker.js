const faker = require('faker');
const fs = require('fs');

const currentDate = new Date();
const isoDateString = currentDate.toISOString();
const formattedDate = isoDateString.split('T')[0];

const generateUsers = (numUsers) => {
    const users = [];
    for (let i = 0; i < numUsers; i++) {
        const user = {
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            birthdate: faker.date.past(60, (new Date()).toISOString().split("T")[0]),
            country: faker.address.country()
        };
        users.push(user);
    }
    return users;
}

const userData = generateUsers(30);

fs.writeFileSync('./users.json', JSON.stringify(userData, null, 2), function (err) {
    if (err) throw err;
    console.log('Updated!');
  }); 