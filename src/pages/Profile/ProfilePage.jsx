import React from "react";
import Logo from "@/components/Logo";

export default function SakuboProfile() {
	const logout = async (e) => {
		localStorage.removeItem("api_token");
		alert("Logged out");
		window.location.href = "/";
	}

	return (
        	<div className="row px-0 mt-3">
			<div className="col-12">
				<div className="card rounded-none! shadow-none border-none! px-0 py-2">
					<div className="card-body py-3 px-0">
						<div className="row">
							<div className="col-3">
							</div>
							<div className="col-9 text-left border-l">
								<div className="row">
									<span className="text-xl text-black font-semibold italic!">Juan Dela Cruz</span>
									<span className="text-sm text-black font-semibold italic!">+639278486755</span>
									<span className="text-sm text-muted font-semibold italic!">Insert somehting here.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="card rounded-none! shadow-none border-none! px-0 py-2">
					<div className="card-body py-2 px-0">
						<div className="row">
							<div className="col-12">
								<ul className="list-group border-none!">
									<li className="list-group-item px-0 border-none! d-flex justify-content-between align-items-center">
										Menu Item
										<span className="badge badge-center bg-primary">3</span>
									</li>
									<li className="list-group-item px-0 border-none! d-flex justify-content-between align-items-center">
										Menu Item
										<span className="badge badge-center bg-primary">2</span>
									</li>
									<li className="list-group-item px-0 border-none! d-flex justify-content-between align-items-center">
										Menu Item
										<span className="badge badge-center bg-primary">6</span>
									</li>
									<li className="list-group-item px-0 border-none! d-flex justify-content-between align-items-center">
										Menu Item
										<span className="badge badge-center bg-primary">1</span>
									</li>
									<li className="list-group-item px-0 border-none! d-flex justify-content-between align-items-center">
										<a className="text-black! no-underline! text-semibold" id="log-out" type="button" onClick={logout}><i class='bx bx-log-out'></i> Logout</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}