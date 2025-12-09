import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

const logout = async (e) => {
	localStorage.removeItem("auth_token");
	alert("Logged out");
	window.location.href = "/";
}

const NavBar = () => {
	return (
		<div>
			<main>
				<Outlet />
			</main>
			<footer>
				<div className="col-12">
					<div className="row">
						<nav>
							<Link to="/">Home</Link> | <Link to="/about">About</Link> <button className="btn btn-primary" type="button" onClick={logout}>Logout</button>
						</nav>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default NavBar;
