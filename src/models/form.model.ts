import { Schema, model } from 'mongoose';

const formSchema = new Schema({
  name: String,
  surname: String,
  email: String,
  age: String,
  height: String,
  weight: String,
  job: String,
  wage: String,
  gender: String,
  fillTime: Number,
  guidelines: Object
}, { timestamps: true });

export const Form = model('Form', formSchema);