import mongoose, { Schema } from 'mongoose';
import controller from '../controller';

const UserSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

export default controller(User);