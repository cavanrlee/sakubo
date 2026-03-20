import axios from "../../api/axios.js"; 

export const registerUser = async (formData) => {
  await axios.get("/sanctum/csrf-cookie");
  // const response = await axios.post("https://sakubo.x10host.com/api/register", formData);
  const response = await axios.post("http://sakubo-laravel-api.com/api/register", formData);

  return response.data;
};
