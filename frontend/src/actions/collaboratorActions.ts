import { getCollaboratorService } from "@/services/collaboratorServices";

export const getCollaboratorAction = async () => {
    try {   
        const response = await getCollaboratorService();
        return response;
    } catch(error) {
		throw error;
    }
};