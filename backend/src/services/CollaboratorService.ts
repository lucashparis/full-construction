import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({})

class CollaboratorService {
    public async getCollaboratorsService(): Promise<any[]>{
        try {
            const collaborators = await prisma.collaborator.findMany();
            return collaborators;
        } catch (error) {
            throw error;
        }
    }
    
    public async getCollaboratorService(id:number): Promise<any>{
        try {
            const collaborators = await prisma.collaborator.findUnique({
                where: {
                  id: id,
                }
            });
            return collaborators;
        } catch (error) {
            throw error;
        }
    }

    public async createCollaboratorService(collaboratorToCreate): Promise<any>{
        try {
            const collaborator = await prisma.collaborator.create({
                data: {...collaboratorToCreate}
            })
            return collaborator;
        } catch (error) {
            throw error;
        }
    }
    
    public async updateCollaboratorService(collaboratorToUpdate): Promise<any>{
        try {
            const collaborator = await prisma.collaborator.update({
                where: {
                    id: Number(collaboratorToUpdate.id),
                },
                data: {
                    name: collaboratorToUpdate.name,
                    daily: collaboratorToUpdate.daily,
                    img: collaboratorToUpdate.img,
                }
            });
            return collaborator;
        } catch (error) {
            throw error;
        }
    }
}

export default new CollaboratorService();