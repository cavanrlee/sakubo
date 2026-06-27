import axios from "@/api/axios.js";

export const registerUser = async (formData) => {
  const response = await axios.post("/api/register", formData);

  return response.data;
};

export const getAddressMaintenance = async () => {
  const response = await axios.get("/api/address-maintenance");

  return response.data;
};
