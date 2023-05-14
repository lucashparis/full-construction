import api from "./api";

export const getCollaboratorService = async () => {
    try {
		const response = await api.get('/api/collaborators');
		return response.data;
    } catch (error) {
		throw error;
    }
};

export const createCollaboratorService = async (collaborator:object) => {
    try {
		const response = await api.post('/api/create-collaborator', collaborator);
		return response.data;
    } catch (error) {
		throw error;
    }
};