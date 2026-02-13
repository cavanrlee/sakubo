import axios from "@/api/axios.js";

export const loginUser = async(formData) => {
	await axios.get("/sanctum/csrf-cookie");
	const response = await axios.post("http://192.168.100.224:8000/api/login",formData);

	return response.data.data;
}
