import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { Outlet, Link } from "react-router-dom";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const logout = async (e) => {
	localStorage.removeItem("auth_token");
	alert("Logged out");
	window.location.href = "/";
}

const NavBar = () => {
	// const [active, setActive] = useState("home");

	// const navItemClass = (key) => `flex flex-col items-center w-25 cursor-pointer transition-colors
	// 		${active === key ? "text-[#4CAF50] font-semibold" : "text-gray-400"}`;

	const navigate = useNavigate();
	const location = useLocation();

	const navItemClass = (path) => `flex flex-col items-center w-25 cursor-pointer transition-colors ${location.pathname === path ? "text-[#4CAF50] font-semibold" : "text-gray-400"}`;

	return (
		<div>
			<main>
				<Outlet />
			</main>
			<footer>
				<div className="row">
					<div className="col-12">
						<div className="row">
							<nav className="fixed bottom-0 left-0 right-0 p-0 bg-white  shadow-[0_-2px_6px_-1px_rgba(0,0,0,0.1)] h-11">
								<ul className="flex justify-around items-center h-10.5 m-0 p-0">
									<li className={navItemClass("/Dashboard")} onClick={() => navigate("/Dashboard")}>
										<span className="text-sm">Dashboard</span>
									</li>

									<li className={navItemClass("/Profile")} onClick={() => navigate("/Profile")}>
										<span className="text-sm">Profile</span>
									</li>

									{/* <li className={navItemClass("notifications")} onClick={() => setActive("notifications")}>
										<span className="text-sm">Notifications</span>
									</li>

									<li className={navItemClass("profile")} onClick={() => setActive("profile")}>
										<span className="text-sm">Profile</span>
									</li> */}
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default NavBar;
