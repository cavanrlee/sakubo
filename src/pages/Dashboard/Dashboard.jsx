import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SakuboDashboard({ user_data }) {
	return (
		<>

			<div className="col-12">
				<div className="card border-0 p-8">
					<div className="row">
						<div className="col-12">
							<span className="text-4xl text-[#4CAF50] font-bold">
								Rolly Gay
							</span>
						</div>
					</div>
				</div>

				<footer>
					<div className="row">
						<div className="col-12">
							<div className="row">
								<nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
									<ul className="flex justify-around items-center h-14">
										<li className="flex flex-col items-center text-gray-500 hover:text-blue-600">
											<span className="text-sm">Home</span>
										</li>

										<li className="flex flex-col items-center text-gray-500 hover:text-blue-600">
											<span className="text-sm">Search</span>
										</li>

										<li className="flex flex-col items-center text-gray-500 hover:text-blue-600">
											<span className="text-sm">Notifications</span>
										</li>

										<li className="flex flex-col items-center text-gray-500 hover:text-blue-600">
											<span className="text-sm">Profile</span>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</footer>

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