import api from "./api";

export const getCollaboratorService = async () => {
    try {
		const response = await api.get('/api/collaborators');
		return response.data;
    } catch (error) {
		throw error;
    }
};