import axios from "@/api/axios.js";

export const menuItems = async () => {
	const response = await axios.get("api/menu-items");

	return response.data;
}

export const userDetails = async (form) => {
	const response = await axios.post("api/logged-user-details", form);

	return response.data;
}

