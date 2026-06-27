import React from "react";
import { useState, useEffect } from 'react';
import DefaultUserImage from "@/components/DefaultUserImage";
import { userDetails } from "@/pages/profile/ProfileController";

const UserCardHeader = () => {
	const [user_details, setUserDetails] = useState([]);

	const [form, setForm] = useState({
		api_toks: localStorage.getItem("api_token")
	});

	const userDeets = async (e) => {
		try {
			const response = await userDetails(form);

			setUserDetails(response.user_details);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		userDeets();
	}, []);

	return (


		<div className="card bg-[#4CAF50]! rounded-none! shadow-none border-none!" >
			<div className="card-body py-2 px-1">
				<div className="row align-items-center">
					<div className="col-3">
						<DefaultUserImage />
					</div>
					<div className="col-7 border-l border-white ms-3 ps-4">
						<div className="row text-left">
							{user_details.map((details) => (
								<span className="text-xl text-white font-bold" key={details.id}>{details.firstname} {details.middlename} {details.lastname}</span>
							))}
							{user_details.map((details) => (
								<span className="text-sm text-white font-medium italic!" key={`new-id-${details.id}`}>+{details.number}</span>
							))}
							<span className="text-sm text-white font-light">Insert somehting here.</span>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};

export default UserCardHeader;
