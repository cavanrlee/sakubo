import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage";
import LoginPage from "../pages/Login/Login";
import RegisterPage from "../pages/Register/Register";
import MainLayout from "../layouts/MainLayout";
import UserScripts from "../pages/Users/UserScripts";

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/" element={<UserScripts />} />
      <Route path="/about" element={<AboutPage />} />

      {/* AUTH ROUTES */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />


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
