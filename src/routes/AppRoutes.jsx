import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { App } from "@capacitor/app";

import HomePage from "@/pages/home/HomePage.jsx";

import ProfilePage from "@/pages/profile/ProfilePage.jsx";
import BusinessAccounts from "@/pages/profile/business-accounts/BusinessAccounts.jsx";
import AddBusinessAccounts from "@/pages/profile/business-accounts/AddBusinessAccounts.jsx";
import EditBusinessAccounts from "@/pages/profile/business-accounts/EditBusinessAccounts.jsx";


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
            <Route path="/about" element={<AboutPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/otp-sending" element={<OTPSendingPage />} />
            <Route path="/otp-receiving" element={<OTPReceivingPage />} />


            {/* AUTHENTICATED ROUTES */}
            <Route element={<ProtectedRoute />}>

                <Route element={<NavBarLayout />}>

                    <Route 
                        path="/dashboard" 
                        element={<DashboardPage />} 
                    />

                    <Route 
                        path="/profile" 
                        element={<ProfilePage />} 
                    />

                    <Route path="/business-accounts">
                        {/* Index /business-accounts */}
                        <Route index element={<BusinessAccounts />} />

                        {/* Add /business-accounts/add */}
                        <Route path="add" element={<AddBusinessAccounts />} />

                        {/* Edit /business-accounts/edit/:id? */}
                        <Route path="edit/:id?" element={<EditBusinessAccounts />} />
                        
                        {/* Delete /business-accounts/delete/:id? */}
                        <Route path="delete/:id?" element={<EditBusinessAccounts />} />
                    </Route>

                    <Route 
                        path="/change-password" 
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