


// Import necessary modules
// import express from 'express';
// import mongoose from 'mongoose';
// import morgan from 'morgan';
// import cors from 'cors';


// const app = express();
// const PORT = process.env.PORT || 5000;



// app.use(morgan('tiny'));
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/ryan', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define a user schema
// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   roll: String,
//   email: String,
//   graduationYear: String,
//   branch: String,
// });





// // Create a User model based on the schema
// const User = mongoose.model('User', userSchema);




// // Route handler for signup
// app.post('/signup', async (req, res) => {
//   const { username, password, roll, email, graduationYear, branch } = req.body;

//   try {
//     // Check if the user already exists in the database
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Username already exists' });
//     }

//     // Create a new user and save it to the database
//     const newUser = new User({
//       username,
//       password,
//       roll,
//       email,
//       graduationYear,
//       branch,
//     });
//     await newUser.save();

//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });


// // Route handler for login
// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Check if the user exists in the database
//     const user = await User.findOne({ username, password });
//     if (user) {
//       res.status(200).json({ message: 'Login successful' });
//       console.log("Successful login");
//     } else {
//       res.status(401).json({ message: 'Login failed' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });


// // Define a user schema
// const adminSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });





// // Create a User model based on the schema
// const  admin = mongoose.model('admin', adminSchema);


// app.post('/AdminSignup', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Check if the user already exists in the database
//     const existingUser = await admin.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Username already exists' });
//     }

//     // Create a new user and save it to the database
//     const newUser = new admin({ username, password });
//     await newUser.save();

//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });


// app.post('/AdminLogin', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Check if the user exists in the database
//     const existingadmin = await admin.findOne({ username, password });
//     if (existingadmin) {
//       res.status(200).json({ message: 'Login successful' });
//       console.log("Successful login");
//     } else {
//       res.status(401).json({ message: 'Login failed' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });


// app.get('/search/:username', async (req, res) => {
//   const { username } = req.params;

//   try {
//     // Check if the user exists in the database
//     const user = await User.findOne({ username });

//     if (user) {
//       res.status(200).json({

//         username: user.username,
//         roll: user.roll,
//         email: user.email,    // Add email field
//         branch: user.branch,
//         graduationYear: user.graduationYear
//         // Add other user details you want to send to the client
//       });
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });



// // Start the server
// app.listen(5000, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import signupRouter from './routes/signup.js';
import loginRouter from './routes/login.js';
import adminSignupRouter from './routes/adminSignup.js';
import adminLoginRouter from './routes/adminLogin.js';
import searchRouter from './routes/search.js';
import changePasswordRouter from './routes/changePassword.js';

import User from './models/user.js';
import Admin from './models/admin.js';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/ryan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ... (Define schemas and models)
app.use((req, res, next) => {
  req.User = User;
  req.Admin = Admin;
  next();
});



app.use(signupRouter);
app.use(loginRouter);
app.use(adminSignupRouter);
app.use(adminLoginRouter);
app.use(searchRouter);
app.use(changePasswordRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
