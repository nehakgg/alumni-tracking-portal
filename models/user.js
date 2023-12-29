import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  roll: String,
  email: String,
  graduationYear: String,
  branch: String,
});

const User = mongoose.model('User', userSchema);

export default User;
