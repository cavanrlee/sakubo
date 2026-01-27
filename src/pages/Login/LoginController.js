import axios from "../../api/axios.js";

export const loginUser = async(username , password) => {
	await axios.get("/sanctum/csrf-cookie");
	const response = await axios.post("http://sakubo-laravel-api.com/api/login", {
		email: username,
		password: password,
	});

	return response.data;
}
