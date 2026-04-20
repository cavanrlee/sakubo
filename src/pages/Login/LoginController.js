import axios from "@/api/axios.js";

export const loginUser = async(formData) => {
	const response = await axios.post("/api/login", formData);

	return response.data.data;
}
