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