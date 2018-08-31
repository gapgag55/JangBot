import mongoose from 'mongoose';

export default () => {
  mongoose.connect(process.env.MONGO_DB)
  .then(
    () => {
      console.log('Connect to Mongoose successfully.');
    },
    err => {
      console.log('Error connect to mongoose:', err)
    }
  );
}
