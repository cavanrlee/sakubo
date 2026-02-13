import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.100.224:8000", 
    headers: {
        "X-API-KEY": import.meta.env.VITE_SAKUBO_APP_API_KEY,
        "Accept": "application/json",
    },
    withCredentials: true,     
    withXSRFToken: true,      
});

export default api;