import axios from "axios";

const api = axios.create({
    baseURL: "http://sakubo-laravel-api.com", 
    withCredentials: true,           
});

export default api;