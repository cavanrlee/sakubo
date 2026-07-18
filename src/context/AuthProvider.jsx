import { useEffect, useState } from "react";
import api from "@/api/axios";
import { AuthContext } from "./AuthContext";


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const checkAuth = async () => {
        try {
            const response = await api.get("/me");
            setUser(response.data.user);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        checkAuth();
    }, []);


    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loading,
                checkAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;