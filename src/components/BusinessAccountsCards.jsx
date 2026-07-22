import React from "react";
import { useState, useEffect } from 'react';
import { useAuth } from "@/hooks/useAuth";


const BusinessAccountsCards = () => {
	const { user } = useAuth();

	const toTitleCase = (text) =>
		text.replace(/\w\S*/g, (word) =>
			word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
		);

	return (
		<>
			{
				user?.business_accnt_details?.map((details, index) => (
					<div className="card shadow-none border py-0 px-2 my-3" key={index}>
						<div className="card-body">
							<div className="row">
								<div className="col-12 text-left">
									<div className="row align-items-center">
										<div className="col-10">
											<div className="row align-items-center">
												<div className="col-12 pe-0">
													<span className="text-gray-600 font-bold! me-2">
														{details.business_name}
													</span>
												</div>
											</div>
										</div>

										<div className="col-2 text-xs! text-center p-0 text-muted">
											<a className="no-underline! text-[#4CAF50]!">Manage</a>
										</div>
									</div>

									<div className="row align-items-center">
										<div className="col-12">
											<span className="text-sm! text-[#0D6EFD]! font-semibold me-2">
												{details.business_category}
											</span>
										</div>
									</div>

									<div className="row align-items-center mt-2">
										<div className="col-12">
											<span className="text-xs! text-muted! me-2">
												{JSON.parse(details.business_services).join(", ")}
											</span>
										</div>
									</div>

									<div className="row align-items-center">
										<div className="col-12 ps-2">
											<i className="bx bxs-map"></i>&nbsp;
											<span className="text-xs! text-gray-700! me-2">
												{toTitleCase(details.barangay_name)}, {toTitleCase(details.municipality_name)}, {toTitleCase(details.province_name)}
											</span>
										</div>
									</div>

									<div className="row align-items-center">
										<div className="col-12 ps-2">
											<i className="bx bx-walk"></i>&nbsp;
											<span className="text-xs! text-muted! font-semibold me-2">
												2 km away
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div >
				))
			}
		</>
	);
};

export default BusinessAccountsCards;