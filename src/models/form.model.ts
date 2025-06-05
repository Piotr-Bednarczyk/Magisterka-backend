import { Schema, model } from 'mongoose';

const formSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ },
  age: { type: Number, min: 0 },
  height: { type: Number, min: 0 },
  weight: { type: Number, min: 0 },
  job: { type: String, required: true },
  wage: { type: Number, required: true, min: 0 },
  gender: { type: String, required: true, enum: ['male', 'female', 'other'] },
  fillTime: { type: Number },
  guidelines: { type: Object }
}, { timestamps: true });

export const Form = model('Form', formSchema);