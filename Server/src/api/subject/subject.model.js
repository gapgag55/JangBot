import mongoose, { Schema } from 'mongoose';
import controller from '../controller';

const SubjectSchema = new Schema({
  name: { type: String, required: true },
});

const Subject = mongoose.model('Subject', SubjectSchema);

export default controller(Subject);