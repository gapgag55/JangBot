import mongoose, { Schema } from 'mongoose';

const SettingSchema = new Schema({
  meta_name: { type: String, required: true },
  meta_value: { type: String, required: true },
});

export default mongoose.model('Setting', SettingSchema);