import { Request, Response } from 'express';
import { Form } from '../models/form.model';

export class FormController {
  async createForm(req: Request, res: Response) {
  try {
    console.log('Received data:', req.body); // <-- dodaj to
    const formData = new Form(req.body);
    const savedForm = await formData.save();
    res.status(201).json(savedForm);
  } catch (error) {
    console.error('Error saving form:', error); // <-- dodaj to
    res.status(500).json({ message: 'Error saving form data', error });
  }
}

  async getForms(req: Request, res: Response) {
    try {
      const forms = await Form.find();
      res.status(200).json(forms);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving form data', error });
    }
  }
}