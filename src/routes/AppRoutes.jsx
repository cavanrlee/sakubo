import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../features/auth/pages/LoginPage";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />


      {/* AUTH ROUTES */}
      <Route path="/login" element={<LoginPage />} />



      {/* NESTED ROUTES WITH LAYOUT */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<h2>Dashboard</h2>} />
        <Route path="/profile" element={<h2>Profile</h2>} />
      </Route>



      {/* FALLBACK (404) */}
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  );
};

export default AppRoutes;
