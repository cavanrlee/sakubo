import React from "react";
import { useState, useEffect } from 'react';
import DefaultUserImage from "@/components/DefaultUserImage";
import { userDetails } from "@/pages/profile/ProfileController";

const UserCardHeader = () => {
	const [user_details, setUserDetails] = useState([]);

	const [form, setForm] = useState({
		api_token: localStorage.getItem("api_token")
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
		<div className="card bg-[#4CAF50]! border-none!">
			<div className="card-body py-2 px-1">
				<div className="row align-items-center">
					<div className="col-3">
						<DefaultUserImage />
					</div>
					<div className="col-7 border-l border-white ms-3 ps-4">
						<div className="row text-left">
							<div key={user_details.id} className="flex flex-col">
								<span className="text-xl text-white font-bold">
									{user_details.firstname} {user_details.middlename} {user_details.lastname}
								</span>
								<span className="text-sm text-white font-medium italic">
									+{user_details.number}
								</span>
								<span className="text-sm text-white font-light">
									Insert something here.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserCardHeader;
