import React from "react";
import { useState } from "react";
import Logo from "@/components/Logo";


export default function SakuboDashboard({ user_data }) {
	const [active, setActive] = useState("home");

	const navItemClass = (key) => `flex flex-col items-center w-25 cursor-pointer transition-colors
   		${active === key ? "text-[#4CAF50] font-semibold" : "text-gray-400"}`;

	return (
		<div className="row">
			<div className="col-12">
				<div className="card border-0 px-0 pt-2 pb-3 bg-transparent! shadow-none!">
					<div className="row">
						<div className="col-12 text-left">
							<input className="form-control size-14 rounded-full!" type="text" placeholder="Search location (e.g. Quezon City)" />
						</div>
					</div>
				</div>

				<div className="card border-0 px-2 py-4 bg-[#4CAF50]! rounded-xl! shadow-none!">
					<div className="card-body p-1">
						<div className="row">
							<div className="col-12 text-center">
								<span className="text-5xl text-white font-bold">1,3434</span>
							</div>

							<div className="col-12 text-center mt-3">
								<span className="text-xl text-white font-semibold">Active Businesses</span>
							</div>

							<div className="col-12 text-center">
								<span className="text-xl text-white font-semibold">Nationwide</span>
							</div>
						</div>

						<div className="row mt-4">
							<div className="col-3 text-center">
								<div className="col-12">
									<span className="text-white font-semibold">589</span>
								</div>
								<div className="col-12">
									<span className="text-white font-semibold">Stores</span>
								</div>
							</div>
							<div className="col-3 text-center">
								<div className="col-12">
									<span className="text-white font-semibold">312</span>
								</div>
								<div className="col-12">
									<span className="text-white font-semibold">Food</span>
								</div>
							</div>
							<div className="col-3 text-center">
								<div className="col-12">
									<span className="text-white font-semibold">246</span>
								</div>
								<div className="col-12">
									<span className="text-white font-semibold">Services</span>
								</div>
							</div>
							<div className="col-3 text-center">
								<div className="col-12">
									<span className="text-white font-semibold">100</span>
								</div>
								<div className="col-12">
									<span className="text-white font-semibold">Mobile</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="card border-0 px-0 pt-2 bg-transparent! shadow-none!">
					<div className="card-body p-1">
						<div className="row align-items-center my-1">
							<div className="col-6 text-left">
								<span className="text-lg font-semibold">Filter by Area</span>
							</div>

							<div className="col-6 text-right">
								<span className="text-sm text-muted">Last updated: 2 hours ago</span>
							</div>
						</div>

						<div className="row align-items-center my-2">
							<div className="col-12 text-center flex overflow-x-scroll">
								<span className="badge rounded-pill text-bg-secondary text-base! px-2 py-1 font-medium!">Region</span>&nbsp;
								<span className="badge rounded-pill text-bg-secondary text-base! px-2 py-1 font-medium!">Province</span>&nbsp;
								<span className="badge rounded-pill text-bg-secondary text-base! px-2 py-1 font-medium!">City/Municipality</span>&nbsp;
								<span className="badge rounded-pill text-bg-secondary text-base! px-2 py-1 font-medium!">Baranggay</span>&nbsp;
								<span className="badge rounded-pill text-bg-secondary text-base! px-2 py-1 font-medium!">Others</span>&nbsp;
							</div>
						</div>

						<div className="row mt-3 mb-1">
							<div className="col-3 w-25 text-center">
								<div className="col-12">
									<span className="text-black text-sm">50+</span>
								</div>
							</div>
							<div className="col-3 w-25 text-center">
								<div className="col-12">
									<span className="text-black text-sm">10 - 49</span>
								</div>
							</div>
							<div className="col-3 w-25 text-center">
								<div className="col-12">
									<span className="text-black text-sm">1 - 9</span>
								</div>
							</div>
							<div className="col-3 w-25 text-center">
								<div className="col-12">
									<span className="text-black text-sm">0</span>
								</div>
							</div>
						</div>

						<div className="row mt-1">
							<div className="w-100">
								<div className="progress h-3!">
									<div className="progress-bar bg-primary w-100" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>

						<div className="row my-2">
							<div className="col-3 w-25 text-center">
								<div className="col-12">
									<span className="text-black text-sm">Strong</span>
								</div>
							</div>
							<div className="col-3 w-25 text-center">
								<div className="col-12">
									<span className="text-black text-sm">Moderate</span>
								</div>
							</div>
							<div className="col-3 w-25 text-center">
								<div className="col-12">
									<span className="text-black text-sm">Light</span>
								</div>
							</div>
							<div className="col-3 w-25 text-center">
								<div className="col-12">
									<span className="text-black text-sm">None</span>
								</div>
							</div>
						</div>

						<div className="row my-2">
							<div className="accordion">
								<div id="accordion-1-icon" className="accordion w-100">
									<div className="accordion-item m-0 bg-transparent! shadow-none! border-0">
										<h2 className="accordion-header text-body d-flex justify-content-between" id="accord-1">
											<button type="button" className="accordion-button collapsed bg-transparent! px-1" data-bs-toggle="collapse" data-bs-target="#accordion-1" aria-controls="accordion-1">
												Accordion Item 1
											</button>
										</h2>

										<div id="accordion-1" className="accordion-collapse collapse bg-transparent!" data-bs-parent="#accordion-1-icon">
											<div className="accordion-body">
												test
											</div>
										</div>
									</div>
								</div>
								<div id="accordion-2-icon" className="accordion w-100">
									<div className="accordion-item m-0 bg-transparent! shadow-none! border-0">
										<h2 className="accordion-header text-body d-flex justify-content-between" id="accord-2">
											<button type="button" className="accordion-button collapsed bg-transparent! px-1" data-bs-toggle="collapse" data-bs-target="#accordion-2" aria-controls="accordion-2">
												Accordion Item 2
											</button>
										</h2>

										<div id="accordion-2" className="accordion-collapse collapse bg-transparent!" data-bs-parent="#accordion-2-icon">
											<div className="accordion-body">
												test
											</div>
										</div>
									</div>
								</div>
								<div id="accordion-3-icon" className="accordion w-100">
									<div className="accordion-item m-0 bg-transparent! shadow-none! border-0">
										<h2 className="accordion-header text-body d-flex justify-content-between" id="accord-3">
											<button type="button" className="accordion-button collapsed bg-transparent! px-1" data-bs-toggle="collapse" data-bs-target="#accordion-3" aria-controls="accordion-3">
												Accordion Item 3
											</button>
										</h2>

										<div id="accordion-3" className="accordion-collapse collapse bg-transparent!" data-bs-parent="#accordion-3-icon">
											<div className="accordion-body">
												test
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
}