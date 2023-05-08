import { Router } from 'express';

import CollaboratorController from './controllers/CollaboratorController';

const routes = Router();

routes.get('/api/collaborators', CollaboratorController.getCollaborators);
routes.post('/createCollaborator', CollaboratorController.createCollaborator);

export default routes;