import axios from "axios";
import { Capacitor } from "@capacitor/core";

// Platform Environment
const getBaseURL = () => {
    // 1. Mobile app sa Capacitor (Android/iOS)
    if (Capacitor.isNativePlatform()) {
        return "/";
    }

    // Production web
    if (import.meta.env.PROD) {
        return "/";
    }

    // Local Development
    return "http://localhost:8000";
};

const baseURL = getBaseURL();

// Sanctum request of CSRF cookie
export const sanctum = axios.create({
    baseURL,
    withCredentials: true,
});

// API application routes
const api = axios.create({
    baseURL: `${baseURL}/api`,
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        "X-API-KEY": import.meta.env.VITE_SAKUBO_APP_API_KEY,
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
});

export default api;