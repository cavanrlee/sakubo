import React from "react";
import Logo from "@/components/Logo";
import { Icon } from "@iconify/react";
import { useState, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import UserCard from "@/components/cards/UserCard";
import { logoutUser } from "@/pages/login/LoginController";
import { useAuth } from "@/hooks/useAuth";
import { getDeviceInfoObject } from "@/helpers/deviceHelper";

export default function SakuboProfile() {
    const { user } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
     const [form, setForm] = useState({device_id: ""});
	

	useEffect(() => {
          const loadDevice = async () => {
               const deviceData = await getDeviceInfoObject();
               setForm((prev) => ({
                    ...prev,
                    device_id: deviceData.device_id,
               }));
          };
          loadDevice();
     }, []);

	const logout = async (e) => {
		e.preventDefault();
		try {
			await logoutUser(form);
			navigate("/");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="row px-0">
			<UserCard/>
			<div className="col-12 vh-100 flex flex-col">
				<div className="card rounded-none! shadow-none! border-0! p-0 h-100 flex flex-col">
					<div className="card-body">
						<ul className="list-group border-0! flex-1">
							{user?.menu?.map((menu_item) => (
								<li key={menu_item.id} className=" list-group-item p-1 text-gray-600! text-sm border-0! d-flex align-items-center cursor-pointer hover:bg-gray-100! 	rounded! " onClick={() => navigate(menu_item.menu_url)} >
									<Icon className="text-2xl me-3" icon={menu_item.icon_name}/>
									<span>
										{menu_item.menu_name}
									</span>
								</li>
							))}

							<li className="list-group-item p-1 text-gray-600! text-sm border-0! d-flex align-items-center cursor-pointer hover:bg-gray-100! rounded! " onClick={logout} >
								<Icon className="text-2xl me-3" icon="solar:logout-2-line-duotone"/>
								<span>
									Log Out
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
