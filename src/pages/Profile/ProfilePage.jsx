import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SakuboProfile({ user_data }) {
	const [active, setActive] = useState("home");


	const logout = async (e) => {
		localStorage.removeItem("auth_token");
		alert("Logged out");
		window.location.href = "/";
	}

	return (
		<>
			<div className="col-12">
				<div className="card border-0 p-8">
					<div className="row">
						<div className="col-12 text-left">
							<span className="text-2xl text-[#4CAF50] font-bold">
								Profile
							</span>
						</div>
					</div>


					<div className="row">
						<div className="col-12 text-left">
							<hr />
						</div>
					</div>

					<div className="row">
						<div className="col-12 text-left">
							<ul className="list-none p-0">
								<li>
									<a className="!text-gray-600 !no-underline text-semibold" id="log-out" type="button" onClick={logout}><i class='bx bx-log-out'></i> Logout</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}