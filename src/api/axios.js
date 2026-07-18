import axios from "axios";

const baseURL = "http://sakubo-laravel-api.com";

export const sanctum = axios.create({
    baseURL,
    withCredentials: true,
});

const api = axios.create({
    baseURL: `${baseURL}/api`,
    withCredentials: true,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    headers: {
        "X-API-KEY": import.meta.env.VITE_SAKUBO_APP_API_KEY,
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
});

export default api;