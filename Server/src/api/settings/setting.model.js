import mongoose, { Schema } from 'mongoose';

const SettingSchema = new Schema({
  channel_access_token: { type: String, required: true },
  group_id: { type: String, required: true },
});

export default mongoose.model('Setting', SettingSchema);