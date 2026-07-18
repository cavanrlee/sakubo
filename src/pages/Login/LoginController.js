import api, { sanctum } from "@/api/axios.js";

// login user
export const loginUser = async(formData) => {
	await sanctum.get('/sanctum/csrf-cookie');
	const response = await api.post("/login", formData);
	return response.data;
}


// change password
export const changePassword = async (formData) => {
	const response = await api.post("/me/change-password", formData);
	return response.data;
}