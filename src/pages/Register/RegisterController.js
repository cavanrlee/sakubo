import api, { sanctum } from "@/api/axios.js";

export const registerUser = async (formData) => {
  await sanctum.get('/sanctum/csrf-cookie');
  const response = await api.post("/register", formData);

  return response.data;
};

export const getAddressMaintenance = async () => {
  const response = await api.get("/address-maintenance");

  return response.data;
};

