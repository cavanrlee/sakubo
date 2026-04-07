import axios from "axios";

const api = axios.create({
    // baseURL: "https://sakubo.x10host.com/",
    baseURL: "http://sakubo-laravel-api.com",
    withCredentials: true, 
    withXSRFToken: true,
    headers: {
        "X-API-KEY": import.meta.env.VITE_SAKUBO_APP_API_KEY,
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
});

export default api;