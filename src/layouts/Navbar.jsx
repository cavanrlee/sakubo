import { useRef } from 'react';
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const logout = async (e) => {
	alert("Logged out");
	localStorage.removeItem("api_token");
	window.location.href = "/";
}

const NavBar = () => {
	const div_ref = useRef(null);
	const navigate = useNavigate();
	const location = useLocation();

	const startY = useRef(0);

	const handleTouchStart = (e) => {
		startY.current = e.touches[0].clientY;
	};

	const handleTouchEnd = (e) => {
		const endY = e.changedTouches[0].clientY;
		const deltaY = startY.current - endY;

		if (Math.abs(deltaY) < 50) return;

		if (deltaY > 0) {
			div_ref.current.classList.add('nav-hidden');
		} else {
			div_ref.current.classList.remove('nav-hidden');
		}
	};

	const navItemClass = (path) => `flex flex-col items-center w-25 cursor-pointer transition-colors ${location.pathname === path ? "text-[#4CAF50] font-semibold" : "text-gray-400"}`;

	return (
		<div className="flex flex-col h-dvh" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} >
			<main className="flex-1 overflow-y-auto">
				<Outlet />
			</main>
			<footer>
				<nav className="fixed bottom-0 left-0 right-0 bg-white h-13 shadow-[0_-2px_6px_-1px_rgba(0,0,0,0.1)]" id="bottom-nav" ref={div_ref}>
					<ul className="flex justify-around items-center h-full m-0 p-0">
						<li className={navItemClass("/Dashboard")} onClick={() => navigate("/Dashboard")}>
							<span className="text-sm">Dashboard</span>
						</li>

						<li className={navItemClass("/Profile")} onClick={() => navigate("/Profile")}>
							<span className="text-sm">Profile</span>
						</li>
					</ul>
				</nav>
			</footer>
		</div>
	);
};

export default NavBar;
