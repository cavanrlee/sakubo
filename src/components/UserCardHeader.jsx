import React from "react";
import { useState, useEffect } from 'react';
import DefaultUserImage from "@/components/DefaultUserImage";
import { useAuth } from "@/hooks/useAuth";

const UserCardHeader = () => {
	const { user } = useAuth();

	return (
		<div className="row align-items-center bg-[#4CAF50]! m-0 py-3">
			<div className="col-3 p-3">
				<DefaultUserImage />
			</div>
			<div className="col-7 border-l border-white">
				<div className="row text-left mx-0">
					<div key={user?.user?.id} className="flex flex-col">
						<span className="text-md text-white font-bold">
							{user?.user?.firstname} {user?.user?.middlename} {user?.user?.lastname}
						</span>

						<span className="text-xs text-white font-medium italic">
							+{user?.user?.number}
						</span>

						<span className="text-xs text-white font-light">
							Insert something here.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserCardHeader;
