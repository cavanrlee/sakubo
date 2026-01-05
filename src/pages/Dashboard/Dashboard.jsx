import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SakuboDashboard({ user_data }) {
	const [active, setActive] = useState("home");

	const navItemClass = (key) => `flex flex-col items-center w-25 cursor-pointer transition-colors
   		${active === key ? "text-[#4CAF50] font-semibold" : "text-gray-400"}`;

	return (
		<>

			<div className="col-12">
				<div className="card border-0 p-8">
					<div className="row">
						<div className="col-12">
							<span className="text-4xl text-[#4CAF50] font-bold">
								saKubo
							</span>
						</div>
					</div>
				</div>

				{/* <footer>
					<div className="row">
						<div className="col-12">
							<div className="row">
								<nav className="fixed bottom-0 left-0 right-0 p-0 bg-white  shadow-[0_-2px_6px_-1px_rgba(0,0,0,0.1)]">
									<ul className="flex justify-around items-center h-14 m-0 p-0">
										<li className={navItemClass("home")} onClick={() => setActive("home")}>
											<span className="text-sm">Home</span>
										</li>

										<li className={navItemClass("search")} onClick={() => setActive("search")}>
											<span className="text-sm">Search</span>
										</li>

										<li className={navItemClass("notifications")} onClick={() => setActive("notifications")}>
											<span className="text-sm">Notifications</span>
										</li>

										<li className={navItemClass("profile")} onClick={() => setActive("profile")}>
											<span className="text-sm">Profile</span>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</footer> */}

				{/* <div className="card border-0 p-0">
					<div className="row mb-2">
						<div className="col-12 my-2">
							<span className="text-2xl !text-gray-600 font-bold">
								Welcome back!
							</span>
						</div>

						<div className="col-12 my-2">
							<span className="text-md !text-gray-600">
								Sign in to your account.
							</span>
						</div>
					</div>
				</div> */}
			</div>
		</>
	);
}