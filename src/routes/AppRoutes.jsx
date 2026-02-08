import { Routes, Route } from "react-router-dom";

import HomePage from "@/pages/home/HomePage.jsx";
import ProfilePage from "@/pages/profile/ProfilePage.jsx";
import AboutPage from "@/pages/about/AboutPage.jsx";
import LoginPage from "@/pages/login/Login.jsx";
import RegisterPage from "@/pages/register/Register.jsx";
import DashboardPage from "@/pages/dashboard/DashboardPage.jsx";
import NavBarLayout from "@/layouts/Navbar.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/about" element={<AboutPage />} />

      {/* AUTH ROUTES */}
      <Route path="/" element={<HomePage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />


      {/* NESTED ROUTES WITH LAYOUT */}
      <Route element={<NavBarLayout />}>
        <Route path="/Dashboard" element={<DashboardPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
      </Route>


      {/* FALLBACK (404) */}
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  );
};

export default AppRoutes;
