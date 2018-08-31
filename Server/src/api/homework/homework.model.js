import mongoose, { Schema } from 'mongoose';

const homeworkSchema = new Schema({
  subject: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true, enum: ['assignment', 'quiz', 'project'], default: 'assignment' },
  date: { type: Date, required: true },
  time: { type: Date, required: true },
  appointment: { type: Number, required: true, enum: [1, 3, 7, 14], default: 1 },
  status: { type: String, enum: ['active', 'deactive'], default: 'active' }
});

export default mongoose.model('Homework', homeworkSchema);