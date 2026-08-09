import api from "@/api/axios.js";


// ============================================================
// LOGIN USER
// ============================================================

export const loginUser = async (formData) => {

    const response = await api.post(
        "/login",
        formData
    );

    // Save Sanctum Personal Access Token
    if (response.data.success) {

        const token = response.data.data.token;

        localStorage.setItem(
            "token",
            token
        );
    }

    return response.data;
};


// ============================================================
// CHANGE PASSWORD
// ============================================================

export const changePassword = async (formData) => {

    const response = await api.post(
        "/change-password",
        formData
    );

    return response.data;
};


// ============================================================
// LOGOUT USER
// ============================================================

export const logoutUser = async (formData) => {

    const response = await api.post(
        "/logout",
        formData
    );

    // Remove local Sanctum token
    localStorage.removeItem("token");

    return response.data;
};
