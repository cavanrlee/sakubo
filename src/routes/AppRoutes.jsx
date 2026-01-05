import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage";
import LoginPage from "../pages/Login/Login";
import LogsinPage from "../pages/Login/Logsin";
import RegisterPage from "../pages/Register/Register";
import DashboardPage from "../pages/Dashboard/Dashboard";
import MainLayout from "../layouts/MainLayout";
import NavBarLayout from "../layouts/Navbar";
import UserScripts from "../pages/Users/UserScripts";
import ProtectedRoute from "../middleware/ProtectedRoutes.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      {/* <Route path="/" element={<UserScripts />} /> */}
      <Route path="/about" element={<AboutPage />} />

      {/* AUTH ROUTES */}
      <Route path="/" element={<LogsinPage />} />
      <Route path="/Register" element={<RegisterPage />} />


      {/* NESTED ROUTES WITH LAYOUT */}
      <Route element={<ProtectedRoute><NavBarLayout /></ProtectedRoute>}>
        <Route path="/Dashboard" element={<DashboardPage />} />
      </Route>

      {/* FALLBACK (404) */}
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  );
};

export default AppRoutes;
