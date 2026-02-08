import React from "react";
import Logo from "@/components/Logo";

export default function SakuboProfile() {
	const logout = async (e) => {
		localStorage.removeItem("api_token");
		alert("Logged out");
		window.location.href = "/";
	}

	return (
        	<div className="row">
            	<div className="col-12 max-w-xl mx-auto">
				<Logo/>

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
									<a className="text-gray-600! no-underline! text-semibold" id="log-out" type="button" onClick={logout}><i class='bx bx-log-out'></i> Logout</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}