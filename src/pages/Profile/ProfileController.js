import api from "@/api/axios.js";









/***********************************
|     Business Accounts API Calls   |
************************************/

// update
export const updateBusinessAccount = async (id, formData) => {
     const response = await api.post(`/business-accounts/update/${id}`, formData);
     return response.data;
}
// create
export const createBusinessAccount = async (formData) => {
     const response = await api.post("/business-accounts/create", formData);
     return response.data;
};
// delete
export const deleteBusinessAccount = async (id) => {
     const response = await api.delete(`/business-accounts/delete/${id}`);
     return response.data;
};
