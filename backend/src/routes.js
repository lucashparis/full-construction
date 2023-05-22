import { Router } from 'express';

import CollaboratorController from './controllers/CollaboratorController';

const routes = Router();

routes.get('/api/collaborators', CollaboratorController.getCollaboratorsController);
routes.get('/api/collaborator/:id', CollaboratorController.getCollaboratorController);
routes.post('/api/create-collaborator', CollaboratorController.createCollaboratorController);
routes.put('/api/update-collaborator', CollaboratorController.updateCollaboratorController);

export default routes;