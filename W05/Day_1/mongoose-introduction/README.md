# MongoDB Essentials: Installation, Setup, and Basic CRUD

the process of installing MongoDB Shell (mongosh), setting up Mongoose for Node.js, deploying a MongoDB database using MongoDB Atlas, and performing basic CRUD (Create, Read, Update, Delete) operations.

## Installation
1. **Install MongoDB Shell (mongosh):**
   - Visit the [official MongoDB website](https://www.mongodb.com/try/download/shell) to download and install mongosh for your operating system.

2. **Setup Mongoose:**
   - Install Mongoose in your Node.js project using npm:
     ```
     npm install mongoose
     ```

3. **Deploy MongoDB Database with MongoDB Atlas:**
   - Sign up or log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (MongoDB's cloud database service).
   - Follow the instructions to create a new cluster and configure it based on your needs.
   - Obtain the connection string for your MongoDB Atlas cluster.

## Usage
1. **Connect to MongoDB Atlas:**
   - In your Node.js application, use the Mongoose library to connect to your MongoDB Atlas cluster using the connection string (URI) `mongodb+srv://<username>:<password>@<clustername>.mongodb.net/<databasename>?retryWrites=true&w=majority
`.

2. **Perform Basic CRUD Operations:**
   - Use Mongoose to define models and schemas for your MongoDB collections.
   - Implement basic CRUD operations such as:
     - Creating documents
     - Reading documents
     - Updating documents
     - Deleting documents

## Code

```javascript
const mongoose = require('mongoose');

// Connect to MongoDB Atlas
mongoose.connect('your_connection_string')
.then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});

// Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Create a model
const User = mongoose.model('User', userSchema);

// Example CRUD operations
async function exampleCRUD() {
  // Create a new user
  const newUser = new User({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
  });
  await newUser.save();
  console.log('New user created:', newUser);

  // Find users
  const users = await User.find();
  console.log('All users:', users);

  // Update a user
  await User.updateOne({ name: 'John Doe' }, { age: 31 });
  console.log('User updated');

  // Delete a user
  await User.deleteOne({ name: 'John Doe' });
  console.log('User deleted');
}

// rak fahm..
```

## Resources
- [MongoDB Official Documentation](https://docs.mongodb.com/)
- [Mongoose Official Documentation](https://mongoosejs.com/docs/)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)