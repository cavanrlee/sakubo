import axios from "axios";

const api = axios.create({
    baseURL: "http://sakubo-laravel-api.com", 
    headers: {
        "X-API-KEY": import.meta.env.VITE_SAKUBO_APP_API_KEY,
        "Accept": "application/json",
    },
    withCredentials: true,     
    withXSRFToken: true,      
});

export default api;