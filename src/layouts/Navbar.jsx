import { Icon } from "@iconify/react";
import { useState, useEffect, useRef } from 'react';
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";


const NavBar = () => {
	const { user } = useAuth();
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

	const navItemClass = (path) => `flex flex-col items-center w-25 cursor-pointer transition-colors ${location.pathname === path ? "text-[#4CAF50] font-extrabold!" : "text-gray-400"}`;

	const [nav_items, setBotNavItems] = useState([]);


	return (
		<div className="flex flex-col h-dvh" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} >
			<main className="flex-1 overflow-y-auto">
				<Outlet />
			</main>
			<footer>
				<nav className="fixed bottom-0 left-0 right-0 bg-white h-13 shadow-[0_-2px_6px_-1px_rgba(0,0,0,0.1)]" id="bottom-nav" ref={div_ref}>
					<ul className="flex justify-around items-center h-full m-0 p-0">
						{user?.bot_nav_menu?.map((list) => (
							<li className={navItemClass(list.url)} onClick={() => navigate(list.url)} key={list.id}>
								<Icon className="text-2xl me-2" icon={list.icon_name} />
							</li>
						))}
					</ul>
				</nav>
			</footer>
		</div>
	);
};

export default NavBar;