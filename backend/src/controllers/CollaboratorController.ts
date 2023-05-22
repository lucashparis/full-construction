import { Request, Response } from "express";
import CollaboratorService from "../services/CollaboratorService";

class CollaboratorController {
    public async getCollaboratorsController(req: Request, res: Response): Promise<Response>{
        const collaborators = await CollaboratorService.getCollaboratorsService();
        return res.json(collaborators);
    }
    
    public async getCollaboratorController(req: Request, res: Response): Promise<Response>{
        const id:number = Number(req.params.id);
        const collaborator = await CollaboratorService.getCollaboratorService(id);
        return res.json(collaborator);
    }
    
    public async createCollaboratorController(req: Request, res: Response): Promise<Response>{
        const collaborator = await CollaboratorService.createCollaboratorService(req.body);
        return res.json(collaborator);
    }
    
    public async updateCollaboratorController(req: Request, res: Response): Promise<Response>{
        const collaborator = await CollaboratorService.updateCollaboratorService(req.body);
        return res.json(collaborator);
    }
}

export default new CollaboratorController();