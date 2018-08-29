import mongoose, { Schema } from 'mongoose';

const homeworkSchema = new Schema({
  subject: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: Date, required: true },
  appointment: { type: Number, required: true },
});

export default mongoose.model('Homework', homeworkSchema);