

// import express from 'express';
// import mongoose from 'mongoose';
// import morgan from 'morgan';
// import cors from 'cors';

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(morgan('tiny'));
// app.use(express.json());
// app.use(cors());


// mongoose.connect('mongodb://localhost:27017/your_database_name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

// app.post('/signup', async (req, res) => {
//   const { username, password } = req.body;
//   console.log('Received POST request at /signup');
//   console.log('Received data from the frontend:', { username, password });
//   try {
//     const newUser = new User({ username, password });
//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
//   console.log('Received POST request at /signup');
// });

// // ... other routes ...

// app.listen(5000, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// Import necessary modules
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ryan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a user schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);

// Route handler for signup
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user already exists in the database
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user and save it to the database
    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Route handler for login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).json({ message: 'Login successful' });
      console.log("Successful login");
    } else {
      res.status(401).json({ message: 'Login failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Start the server
app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});
