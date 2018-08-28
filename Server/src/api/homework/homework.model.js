import mongoose, { Schema } from 'mongoose';
import controller from '../controller';

const homeworkSchema = new Schema({
  subject: { type: String, required: true },
  description: { type: String, required: true },
  due_date: { type: Date, required: true },
});

const Homework = mongoose.model('Homework', homeworkSchema);

export default controller(Homework);