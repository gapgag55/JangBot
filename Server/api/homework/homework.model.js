import mongoose, { Schema } from 'mongoose';

const homeworkSchema = new Schema({
  desc: { type: String, required: true },
  due_date: { type: String, required: true },
});

export default mongoose.model('Homework', homeworkSchema);