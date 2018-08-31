import mongoose, { Schema } from 'mongoose';

const LineSchema = new Schema({
  lineId: { type: String },
  type: { type: String }
});

export default mongoose.model('Line', LineSchema);