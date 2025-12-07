import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

const logout = async (e) => {
  localStorage.removeItem("auth_token");
  alert("Logged out");
  window.location.href = "/login";
}

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> <button className="btn btn-primary" type="button" onClick={logout}>Logout</button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
