import axios from "axios";
import { Preferences } from "@capacitor/preferences";

const api = axios.create({
    baseURL: "http://sakubo-laravel-api.com",
    withCredentials: true, 
    headers: {
        "X-API-KEY": import.meta.env.VITE_SAKUBO_APP_API_KEY,
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
});

export default api;