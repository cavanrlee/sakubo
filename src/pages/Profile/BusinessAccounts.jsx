import React from "react";
import { useState, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";
import DefaultUserImage from "@/components/DefaultUserImage";
import UserCardHeader from "@/components/UserCardHeader";
import BusinessAccountsCards from "@/components/BusinessAccountsCards";


export default function BusinessAccounts() {
	return (
		<div className="row px-0">
			<UserCardHeader />
			<div className="col-12 px-6!">
				<BusinessAccountsCards />
			</div>
		</div>
	);
}