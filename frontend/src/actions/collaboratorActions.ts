import { createCollaboratorService, getCollaboratorByIDService, getCollaboratorService, updateCollaboratorService } from "@/services/collaboratorServices";

export const getCollaboratorAction = async () => {
    try {   
        const response = await getCollaboratorService();
        return response;
    } catch(error) {
		throw error;
    }
};

export const getCollaboratorByIDAction = async (id:number) => {
    try {   
        const response = await getCollaboratorByIDService(id);
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

export const updateCollaboratorAction = async (collaborator:object) => {
    try {   
        const response = await updateCollaboratorService(collaborator);
        return response;
    } catch(error) {
		throw error;
    }
};