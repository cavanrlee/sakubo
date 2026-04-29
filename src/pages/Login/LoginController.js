import axios from "@/api/axios.js";

// change password
export const loginUser = async(formData) => {
	const response = await axios.post("/api/login", formData);

	return response.data.data;
}

// change password
export const changePassword = async (formData) => {
	const response = await axios.post("api/change-password", formData);

	return response.data;
}