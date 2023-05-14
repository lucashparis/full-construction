import { Router } from 'express';

import CollaboratorController from './controllers/CollaboratorController';

const routes = Router();

routes.get('/api/collaborators', CollaboratorController.getCollaboratorsController);
routes.post('/api/create-collaborator', CollaboratorController.createCollaboratorController);

export default routes;