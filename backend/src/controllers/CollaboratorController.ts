import { NextFunction, Request, Response } from "express";
import CollaboratorService from "../services/CollaboratorService";
import { AppError } from "../errors/AppError";

class CollaboratorController {
    public async getCollaboratorsController(req: Request, res: Response, next: NextFunction){
        try {
            const collaborators = await CollaboratorService.getCollaboratorsService();
            return res.status(200).json(collaborators);
        } catch (error) {
            if (error instanceof AppError) {
                res.status(error.statusCode).json({msg: error.message});
            } else {
                next(error);
            }  
        }
    }
    
    public async getCollaboratorController(req: Request, res: Response, next: NextFunction){
        try {
            const id:number = Number(req.params.id);
            const collaborator = await CollaboratorService.getCollaboratorService(id);
            return res.status(200).json(collaborator);
            
        } catch (error) {
            if (error instanceof AppError) {
                res.status(error.statusCode).json({msg: error.message});
            } else {
                next(error);
            }
        }
    }
    
    public async createCollaboratorController(req: Request, res: Response, next: NextFunction){
        try {
            const collaborator = await CollaboratorService.createCollaboratorService(req.body);
            return res.status(200).json(collaborator);
        } catch (error) {
            if (error instanceof AppError) {
                res.status(error.statusCode).json({msg: error.message});
            } else {
                next(error);
            }    
        }
    }
    
    public async updateCollaboratorController(req: Request, res: Response, next: NextFunction){
        try {
            const collaborator = await CollaboratorService.updateCollaboratorService(req.body);
            return res.status(200).json(collaborator);
        } catch (error) {
            if (error instanceof AppError) {
                res.status(error.statusCode).json({msg: error.message});
            } else {
                next(error);
            } 
        }
    }
}

export default new CollaboratorController();