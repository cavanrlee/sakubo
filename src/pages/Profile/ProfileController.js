import api from "@/api/axios.js";


// update
export const updateBusinessAccount = async (id, formData) => {
     const response = await api.post(`/business-accounts/${id}`, formData);
     return response.data;
}

// create
export const createBusinessAccount = async (formData) => {
     const response = await api.post("/business-accounts", formData);
     return response.data;
};