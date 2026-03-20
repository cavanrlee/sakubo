import axios from "@/api/axios.js";

export const loginUser = async(formData) => {
	await axios.get("/sanctum/csrf-cookie");
	const response = await axios.post("/login", formData);

	return response.data.data;
}
