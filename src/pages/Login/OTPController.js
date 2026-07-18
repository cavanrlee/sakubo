import api, { sanctum } from "@/api/axios.js";

export const sendOTP = async (formData) => {
	const response = await api.post("/send-otp", formData);

	return response.data;
}

export const sendOTPWhatsapp = async (formData) => {
	const response = await api.post("/send-otp-whatsapp", formData);

	return response.data;
}

export const OTPValidation = async (formData) => {
	const response = await api.post("/otp-validation", formData);

	return response.data;
}