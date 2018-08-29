import mongoose, { Schema } from 'mongoose';

const LogSchema = new Schema({
  replyToken: { type: String },
  type: { type: String },
  timestamp: { type: String },
  source: {
    type: { type: String },
    userId: { type: String }
  },
  message: {
    id: { type: String },
    type: { type: String },
    text: { type: String }
  },
});

export default mongoose.model('Log', LogSchema);