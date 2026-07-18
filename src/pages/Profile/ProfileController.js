import api from "@/api/axios.js";

// logout user
export const logoutUser = async() => {
	const response = await api.post("/me/logout");
	return response.data;
}
