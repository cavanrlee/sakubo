import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";


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
