import { createCollaboratorService, getCollaboratorService } from "@/services/collaboratorServices";

export const getCollaboratorAction = async () => {
    try {   
        const response = await getCollaboratorService();
        return response;
    } catch(error) {
		throw error;
    }
};

export const createCollaboratorAction = async (collaborator:object) => {
    try {   
        const response = await createCollaboratorService(collaborator);
        return response;
    } catch(error) {
		throw error;
    }
};