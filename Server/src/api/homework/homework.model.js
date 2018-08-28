import mongoose, { Schema } from 'mongoose';

const homeworkSchema = new Schema({
  subject: { type: String, required: true },
  description: { type: String, required: true },
  due_date: { type: Date, required: true },
  notify_day: { type: Number, required: true },
});

export default mongoose.model('Homework', homeworkSchema);