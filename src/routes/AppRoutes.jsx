import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { App } from "@capacitor/app";

import HomePage from "@/pages/home/HomePage.jsx";
import ProfilePage from "@/pages/profile/ProfilePage.jsx";
import BusinessAccounts from "@/pages/profile/BusinessAccounts.jsx";
import AboutPage from "@/pages/about/AboutPage.jsx";

import LoginPage from "@/pages/login/Login.jsx";
import ChangePassword from "@/pages/login/ChangePassword.jsx";
import OTPSendingPage from "@/pages/login/OTPSending.jsx";
import OTPReceivingPage from "@/pages/login/OTPReceiving.jsx";

import RegisterPage from "@/pages/register/Register.jsx";
import DashboardPage from "@/pages/dashboard/Dashboard.jsx";

import NavBarLayout from "@/layouts/Navbar.jsx";
import ProtectedRoute from "@/routes/ProtectedRoute.jsx";


const AppRoutes = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const backButtonListener = App.addListener('backButton', ({ canGoBack }) => {
            if (canGoBack) {
                window.history.back();
            } else {
                App.exitApp();
            }
        });

        return () => {
            backButtonListener.then(listener => listener.remove());
        };
    }, [navigate]);

    return (
        <Routes>

            {/* PUBLIC ROUTES */}
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />

            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />

            <Route path="/OTP-sending" element={<OTPSendingPage />} />
            <Route path="/OTP-receiving" element={<OTPReceivingPage />} />


            {/* AUTHENTICATED ROUTES */}
            <Route element={<ProtectedRoute />}>

                <Route element={<NavBarLayout />}>

                    <Route 
                        path="/Dashboard" 
                        element={<DashboardPage />} 
                    />

                    <Route 
                        path="/Profile" 
                        element={<ProfilePage />} 
                    />

                    <Route 
                        path="/BusinessAccounts" 
                        element={<BusinessAccounts />} 
                    />

                    <Route 
                        path="/ChangePassword" 
                        element={<ChangePassword />} 
                    />

                </Route>

            </Route>


            {/* 404 */}
            <Route 
                path="*" 
                element={<h2>Page Not Found</h2>} 
            />

        </Routes>
    );
};


export default AppRoutes;