import axios from "axios";
import { Capacitor } from "@capacitor/core";

// ============================================================
// BASE URL
// ============================================================
const getBaseURL = () => {

    // Capacitor Android / iOS
    if (Capacitor.isNativePlatform()) {
        return "https://sakubo-web.onrender.com";
    }

    // Production Web
    if (import.meta.env.PROD) {
        return "https://sakubo-web.onrender.com";
    }

    // Local Development
    return "http://localhost:8000";
};

const baseURL = getBaseURL();


// ============================================================
// AXIOS API
// ============================================================
const api = axios.create({
    baseURL: `${baseURL}/api`,
    headers: {
        Accept: "application/json",
        "X-API-KEY": import.meta.env.VITE_SAKUBO_APP_API_KEY,
    },
});


// ============================================================
// ADD SANCTUM TOKEN TO REQUEST
// ============================================================
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


// ============================================================
// HANDLE AUTHENTICATION ERROR
// ============================================================
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            console.warn(
                "Authentication failed:",
                error.response?.data
            );
            localStorage.removeItem("token");
        }
        return Promise.reject(error);
    }
);


export default api;
