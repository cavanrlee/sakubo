import React from "react";
import Logo from "@/components/Logo";
import { Icon } from "@iconify/react";

import { useState, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import Avatar from "@/components/Avatar";
import UserCard from "@/components/cards/UserCard";
import BusinessAccountsCards from "@/components/cards/BusinessAccountsCards";

export default function BusinessAccounts() {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<div className="row px-0">
			<UserCard/>
			<div className="col-12 mt-3 mb-0 px-9!">
				<div className="row">
					<button className="btn flex items-center justify-center gap-2 border-2! border-dashed! border-[#4CAF50]! bg-[#91d893]! text-white! w-full" onClick={() => navigate("/ManageBusinessAccounts")}>
						<Icon className="text-2xl me-2 inline-block shrink-0 mb-1" icon="solar:add-circle-bold-duotone" />Add Business Account
					</button>
				</div>
			</div>
			<div className="col-12 px-6!">
				<BusinessAccountsCards/>
			</div>
		</div >
	);
}