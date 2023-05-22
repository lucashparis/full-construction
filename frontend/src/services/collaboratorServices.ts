import api from "./api";

export const getCollaboratorService = async () => {
    try {
		const response = await api.get('/api/collaborators');
		return response.data;
    } catch (error) {
		throw error;
    }
};

export const getCollaboratorByIDService = async (id:number) => {
    try {
		const response = await api.get(`/api/collaborator/${id}`);
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

export const updateCollaboratorService = async (collaborator:object) => {
    try {
		const response = await api.put('/api/update-collaborator', collaborator);
		return response.data;
    } catch (error) {
		throw error;
    }
};