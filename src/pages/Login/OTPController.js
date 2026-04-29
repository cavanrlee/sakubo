import axios from "@/api/axios.js";

export const sendOTP = async (formData) => {
	const response = await axios.post("api/send-otp", formData);

	return response.data;
}

export const sendOTPWhatsapp = async (formData) => {
	const response = await axios.post("api/send-otp-whatsapp", formData);

	return response.data;
}

export const OTPValidation = async (formData) => {
	const response = await axios.post("api/otp-validation", formData);

	return response.data;
}