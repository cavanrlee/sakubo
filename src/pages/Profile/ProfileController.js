import axios from "@/api/axios.js";


export const userDetails = async (form) => {
	const response = await axios.post("api/logged-user-details", form);

	return response.data;
}


export const menuItems = async () => {
	const response = await axios.get("api/menu-items");

	return response.data;
}

export const botNavItems = async () => {
	const response = await axios.get("api/bot-nav-items");

	return response.data;
}


export const userBusinessAccounts = async (form) => {
	const response = await axios.post("api/business-accnt-details", form);

	return response.data;
}

