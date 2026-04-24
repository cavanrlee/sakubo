import axios from "@/api/axios.js";

export const registerUser = async (formData) => {
  const response = await axios.post("/api/register", formData);

  return response.data;
};
