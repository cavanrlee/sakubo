import React from "react";
import { useState } from "react";
import Logo from "@/components/Logo";


export default function SakuboDashboard({ user_data }) {
	const [active, setActive] = useState("home");

	const navItemClass = (key) => `flex flex-col items-center w-25 cursor-pointer transition-colors
   		${active === key ? "text-[#4CAF50] font-semibold" : "text-gray-400"}`;

	return (
        <div className="row">
            <div className="col-12 max-w-xl mx-auto">
				<Logo/>

				<div className="card border-0 p-8">
					<div className="row">
						<div className="col-12 text-left">
							<span className="text-2xl text-[#4CAF50] font-bold">
								Dashboard
							</span>
						</div>
					</div>
					<div className="row">
						<div className="col-12 text-left">
							<hr />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}