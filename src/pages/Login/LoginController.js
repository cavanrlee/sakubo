import axios from "@/api/axios.js";

export const loginUser = async(formData) => {
	await axios.get("/sanctum/csrf-cookie");
	const response = await axios.post("http://sakubo-laravel-api.com/api/login",formData);

	return response.data;
}
