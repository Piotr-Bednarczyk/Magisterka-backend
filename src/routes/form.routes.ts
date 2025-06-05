import { Router } from 'express';
import { FormController } from '../controllers/form.controller';

const router = Router();
const formController = new FormController();

export function setFormRoutes(app: Router) {
  app.post('/api/forms', formController.createForm);
  app.get('/api/forms', formController.getForms);
}