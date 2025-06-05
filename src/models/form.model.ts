import { Schema, model } from 'mongoose';

const formSchema = new Schema({
  name: String,
  surname: String,
  email: String,
  age: Number,
  height: Number,
  weight: Number,
  job: String,
  wage: Number,
  gender: String,
  fillTime: Number,
  guidelines: Object
}, { timestamps: true });

export const Form = model('Form', formSchema);