import React from "react";
import { useState, useEffect } from 'react'
import Logo from "@/components/Logo";
import DefaultUserImage from "@/components/DefaultUserImage";
import UserCardHeader from "@/components/UserCardHeader";
import { menuItems, userDetails } from "@/pages/profile/ProfileController";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function BusinessAccounts() {
	return (
		<div className="row px-0">
			<UserCardHeader />

			<div className="col-12 px-6!">
				<div className="card border py-0 px-2 my-3">
					<div className="card-body">
						<div className="row">
							<div className="col-12 text-left">
								<div className="row align-items-center">
									<div className="col-10">
										<div className="row align-items-center">
											<div className="col-10 pe-0">
												<span className="text-lg text-gray-700 font-bold! me-2">
													Rolly's Sari-Sari Store
												</span>
											</div>
										</div>
									</div>

									<div className="col-2 text-xs! font-semibold text-center p-0 text-muted">
										Manage
									</div>
								</div>

								<div className="row align-items-center my-1">
									<div className="col-12">
										<span className="text-sm! text-[#0D6EFD]! font-semibold me-2">
											Sari-Sari Store
										</span>
									</div>
								</div>

								<div className="row align-items-center my-1">
									<div className="col-12">
										<span className="text-xs! text-muted! me-2">
											Cold drinks, snacks, loads, etc.
										</span>
									</div>
								</div>

								<div className="row align-items-center my-1">
									<div className="col-12 ps-2">
										<i className="bx bxs-map"></i>&nbsp;
										<span className="text-sm! text-gray-700! me-2">
											123 Parada, Santa Maria Bulacan
										</span>
									</div>
								</div>

								<div className="row align-items-center my-1">
									<div className="col-12 ps-2">
										<i className="bx bx-walk"></i>&nbsp;
										<span className="text-xs! text-muted! me-2">
											2 km away
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}