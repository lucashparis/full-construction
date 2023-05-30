import { PrismaClient } from '@prisma/client';
import { AppError } from '../errors/AppError';
const prisma = new PrismaClient({});

class CollaboratorService {
    public async getCollaboratorsService(){
        const collaborators = await prisma.collaborator.findMany();
        return collaborators;
    }
    
    public async getCollaboratorService(id:number){
        const collaborators = await prisma.collaborator.findUnique({
            where: {
                id: id,
            }
        });
        
        if (!collaborators) {
            throw new AppError("Funcionário não encontrado!", 404);
        }

        return collaborators;
    }

    public async createCollaboratorService(collaboratorToCreate){
        if (!collaboratorToCreate.name) throw new AppError("Nome deve ser informado!", 400);
        if (!collaboratorToCreate.daily && collaboratorToCreate.daily <= 0) throw new AppError("A diária deve ser maior que 0", 400); 

        const collaborator = await prisma.collaborator.create({
            data: {...collaboratorToCreate}
        });
        return collaborator;
    }
    
    public async updateCollaboratorService(collaboratorToUpdate){
        if (!collaboratorToUpdate.name) throw new AppError("Nome deve ser informado!", 400);
        if (!collaboratorToUpdate.daily && collaboratorToUpdate.daily <= 0) throw new AppError("A diária deve ser maior que 0", 400); 

        const dataToUpdate = {
            name: collaboratorToUpdate.name,
            daily: collaboratorToUpdate.daily,
            img: collaboratorToUpdate.img,
            status: collaboratorToUpdate.status,
        };

        const collaboratorIsValid = await prisma.collaborator.findUnique({
            where: {
                id: Number(collaboratorToUpdate.id),
            }
        });
        
        if (!collaboratorIsValid) {
            throw new AppError("Funcionário não encontrado!", 404);
        }

        const collaborator = await prisma.collaborator.update({
            where: {
                id: Number(collaboratorToUpdate.id),
            },
            data: dataToUpdate
        });
        return collaborator;
    }
}

export default new CollaboratorService();