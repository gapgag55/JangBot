import mongoose, { Schema } from 'mongoose';

const SubjectSchema = new Schema({
  name: { type: String, required: true },
});

export default  mongoose.model('Subject', SubjectSchema);