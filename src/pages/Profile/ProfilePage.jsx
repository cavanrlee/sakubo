import React from "react";
import Logo from "@/components/Logo";
import { Icon } from "@iconify/react";
import { useState, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import UserCardHeader from "@/components/UserCardHeader";
import DefaultUserImage from "@/components/DefaultUserImage";
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
			navigate("/Login");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="row px-0">
			<UserCardHeader />
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


		// <div className="row">
		// 	<div className="col-12">
		// 		{/* Business tab with 4 steps */}
		// 				{/* Navigation Dots */}
		// 				<form className="w-full mt-6 flex flex-col gap-3 pb-10" onSubmit={handleSubmit}>

		// 					<div className="flex justify-center gap-2">
		// 						{[1, 2, 3, 4, 5].map((dot) => (
		// 						<span key={dot} onClick ={() => setBusinessStep(dot)} className={`w-3 h-3 rounded-full ${
		// 							businessStep === dot ? "bg-[#4CAF50]" : "bg-gray-300"
		// 							}`}
		// 						></span>
		// 						))}
		// 					</div>

		// 					{/* Step 1: Basic Info */}
		// 					{businessStep === 1 && (
		// 						<>
		// 						<span className="text-md  font-bold text-gray-500">
		// 							Business Information
		// 						</span>

		// 						<TextInput
		// 							form={businessForm}
		// 							errors={errors}
		// 							handleChange={handleChange}
		// 							name="business_name"
		// 							label="Business Name"
		// 							variant="primary"
		// 							type="text"
		// 							placeHolder="Business Name"
		// 						/>
		// 						<TextInput
		// 							form={businessForm}
		// 							errors={errors}
		// 							handleChange={handleChange}
		// 							name="business_category"
		// 							label="Business Category"
		// 							variant="primary"
		// 							type="text"
		// 							placeHolder="Business Category"
		// 						/>
		// 						<TextInput
		// 							form={businessForm}
		// 							errors={errors}
		// 							handleChange={handleChange}
		// 							name="business_type"
		// 							label="Business Type"
		// 							type="select"
		// 							variant="primary"
		// 							placeHolder="Business Type"
		// 							options={[
		// 								{ value: "Local", label: "Local" },
		// 								{ value: "International", label: "International" },
		// 							]}
		// 						/>
		// 						<TextInput
		// 							form={businessForm}
		// 							errors={errors}
		// 							handleChange={handleChange}
		// 							name="business_email"
		// 							label="Business Email (Optional)"
		// 							variant="primary"
		// 							type="email"
		// 							placeHolder="Email"
		// 						/>
		// 						<TextInput
		// 							form={businessForm}
		// 							errors={errors}
		// 							handleChange={handleChange}
		// 							name="business_website"
		// 							label="Website (Optional)"
		// 							variant="primary"
		// 							type="text"
		// 							placeHolder="Website"
		// 						/>
		// 						<TextInput
		// 							form={businessForm}
		// 							errors={errors}
		// 							handleChange={handleChange}
		// 							name="business_address"
		// 							label="Street Address"
		// 							variant="primary"
		// 							type="text"
		// 							placeHolder="Street Address"
		// 						/>
		// 						<div className="flex gap-2">
		// 							<div className="flex-1">
		// 								<TextInput
		// 									form={businessForm}
		// 									errors={errors}
		// 									handleChange={handleChange}
		// 									name="business_barangay"
		// 									label="Barangay"
		// 									variant="primary"
		// 									type="text"
		// 									placeHolder="Barangay"
		// 								/>
		// 							</div>
		// 							<div className="flex-1">
		// 								<TextInput
		// 									form={businessForm}
		// 									errors={errors}
		// 									handleChange={handleChange}
		// 									name="business_city"
		// 									label="City"
		// 									variant="primary"
		// 									type="text"
		// 									placeHolder="City"
		// 								/>
		// 							</div>
		// 							<div className="flex-1">
		// 								<TextInput
		// 									form={businessForm}
		// 									errors={errors}
		// 									handleChange={handleChange}
		// 									name="business_province"
		// 									label="Province"
		// 									variant="primary"
		// 									type="text"
		// 									placeHolder="Province"
		// 								/>
		// 							</div>
		// 						</div>
		// 						<TextInput
		// 							form={businessForm}
		// 							errors={errors}
		// 							handleChange={handleChange}
		// 							name="business_number"
		// 							label="Contact Number"
		// 							variant="primary"
		// 							type="number"
		// 							placeHolder="Contact Number"
		// 						/>
		// 						<div className="flex gap-2">
		// 							<div className="flex-1">
		// 								<TextInput
		// 									form={businessForm}
		// 									errors={errors}
		// 									handleChange={handleChange}
		// 									name="days_of_operation"
		// 									label="Days"
		// 									type="select"
		// 									variant="primary"
		// 									placeHolder="Select Days"
		// 									options={[
		// 										{ value: "5", label: "5" },
		// 										{ value: "6", label: "6" },
		// 										{ value: "7", label: "7" },
		// 									]}
		// 								/>
		// 							</div>
		// 							<div className="flex-1">
		// 								<TextInput
		// 									form={businessForm}
		// 									errors={errors}
		// 									handleChange={handleChange}
		// 									name="from_time"
		// 									label="From"
		// 									variant="primary"
		// 									type="time"
		// 									placeHolder=""
		// 								/>
		// 							</div>
		// 							<div className="flex-1">
		// 								<TextInput
		// 									form={businessForm}
		// 									errors={errors}
		// 									handleChange={handleChange}
		// 									name="to_time"
		// 									label="To"
		// 									variant="primary"
		// 									type="time"
		// 									placeHolder=""
		// 								/>
		// 							</div>
		// 						</div>
		// 						<span className="text-sm text-left font-bold text-gray-700">
		// 							Payment Method Accepted
		// 						</span>
		// 						<div className="flex gap-2">
		// 							<div className="flex-1 border p-3 border-gray-500 rounded-lg">
		// 								<TextInput
		// 									form={businessForm}
		// 									errors={errors}
		// 									handleChange={handleChange}
		// 									name="cash"
		// 									label="Cash"
		// 									variant="primary"
		// 									type="checkbox"
		// 								/>
		// 							</div>
		// 							<div className="flex-1 border p-3 border-gray-500 rounded-lg">
		// 								<TextInput
		// 									form={businessForm}
		// 									errors={errors}
		// 									handleChange={handleChange}
		// 									name="gcash"
		// 									label="GCash"
		// 									variant="primary"
		// 									type="checkbox"
		// 								/>
		// 							</div>
		// 						</div>
		// 						<div className="flex gap-2">
		// 							<div className="flex-1 border p-3 border-gray-500 rounded-lg">
		// 								<TextInput
		// 									form={businessForm}
		// 									errors={errors}
		// 									handleChange={handleChange}
		// 									name="paymaya"
		// 									label="PayMaya"
		// 									variant="primary"
		// 									type="checkbox"
		// 								/>
		// 							</div>
		// 							<div className="flex-1 border p-3 border-gray-500 rounded-lg">
		// 								<TextInput
		// 									form={businessForm}
		// 									errors={errors}
		// 									handleChange={handleChange}
		// 									name="utang_ok"
		// 									label="Utang OK"
		// 									variant="primary"
		// 									type="checkbox"
		// 								/>
		// 							</div>
		// 						</div>
		// 						<span className="text-sm text-left font-bold text-gray-700">
		// 							Service Option (Optional)
		// 						</span>
		// 						<div className="flex gap-2">
		// 							<div className="flex-1 border p-3 border-gray-500 rounded-lg">
		// 								<TextInput
		// 									form={businessForm}
		// 									errors={errors}
		// 									handleChange={handleChange}
		// 									name="delivery"
		// 									label="Delivery"
		// 									variant="primary"
		// 									type="checkbox"
		// 								/>
		// 							</div>
		// 							<div className="flex-1 border p-3 border-gray-500 rounded-lg">
		// 								<TextInput
		// 									form={businessForm}
		// 									errors={errors}
		// 									handleChange={handleChange}
		// 									name="meetup"
		// 									label="Meet Up"
		// 									variant="primary"
		// 									type="checkbox"
		// 								/>
		// 							</div>
		// 						</div>
		// 						<div className="flex gap-2">
		// 							<div className="flex-1 border p-3 border-gray-500 rounded-lg">
		// 								<TextInput
		// 									form={businessForm}
		// 									errors={errors}
		// 									handleChange={handleChange}
		// 									name="pickup"
		// 									label="Pick Up"
		// 									variant="primary"
		// 									type="checkbox"
		// 								/>
		// 							</div>
		// 							<div className="flex-1 p-3">
									
		// 							</div>
		// 						</div>
		// 							<TextInput
		// 								form={businessForm}
		// 								errors={errors}
		// 								handleChange={handleChange}
		// 								name="business_notes"
		// 								label="Additional Information (Optional)"
		// 								variant="primary"
		// 								type="textarea"
		// 								placeHolder="Additional notes"
		// 							/>
		// 						</>
		// 					)}

		// 					{/* Step 2: Social Media */}
		// 					{businessStep === 2 && (
		// 						<>
		// 							<span className="text-md  font-bold text-gray-500">
		// 								Social Media (All Optional)
		// 							</span>
		// 							<span className="text-md text-gray-500">
		// 								Help customers find you on social media
		// 							</span>
		// 							<TextInput
		// 								form={businessForm}
		// 								errors={errors}
		// 								handleChange={handleChange}
		// 								name="tiktok"
		// 								label="Tiktok Username"
		// 								variant="primary"
		// 								type="text"
		// 								placeHolder="@yourbusiness"
		// 							/>
		// 							<TextInput
		// 								form={businessForm}
		// 								errors={errors}
		// 								handleChange={handleChange}
		// 								name="facebook"
		// 								label="Facebook Page/Profile"
		// 								variant="primary"
		// 								type="text"
		// 								placeHolder="facebook.com/yourbusiness"
		// 							/>
		// 							<TextInput
		// 								form={businessForm}
		// 								errors={errors}
		// 								handleChange={handleChange}
		// 								name="instagram"
		// 								label="Instagram"
		// 								variant="primary"
		// 								type="text"
		// 								placeHolder="@yourbusiness"
		// 							/>
		// 							<TextInput
		// 								form={businessForm}
		// 								errors={errors}
		// 								handleChange={handleChange}
		// 								name="website"
		// 								label="Website URL"
		// 								variant="primary"
		// 								type="text"
		// 								placeHolder="http://yourbusiness.com"
		// 							/>
		// 						</>
		// 					)}

		// 					{/* Step 3: Business Requirements */}
		// 					{businessStep === 3 && (
		// 						<>
		// 							<span className="text-md  font-bold text-gray-500">
		// 								Business Requirements
		// 							</span>
		// 							<div className="alert text-left alert-danger border-0 border-start border-4 border-danger d-flex align-items-start gap-3 rounded-3">
		// 								<Icon icon="mdi:error-outline" className="text-3xl"/>
		// 								While providing documents is optional,
		// 								You're welcome to register without them. You can easily upload any necessary
		// 								documents at your convenience within your Business Account settings.
		// 							</div>
		// 							<p className="text-muted text-center">
		// 								Uploading business documents helps build trust with customers and improves your business credibility on saKubo.
		// 							</p>

		// 							<TextInput
		// 								form={businessForm}
		// 								errors={errors}
		// 								handleChange={handleChange}
		// 								name="business_permit"
		// 								label="Business Permit / LGU Permit"
		// 								variant="primary"
		// 								type="file"
		// 							/>
		// 							<TextInput
		// 								form={businessForm}
		// 								errors={errors}
		// 								handleChange={handleChange}
		// 								name="store_front_photo"
		// 								label="Store Front Photo"
		// 								variant="primary"
		// 								type="file"
		// 							/>
		// 							<TextInput
		// 								form={businessForm}
		// 								errors={errors}
		// 								handleChange={handleChange}
		// 								name="bir_certificate_of_registration"
		// 								label="BIR Certificate of Registration"
		// 								variant="primary"
		// 								type="file"
		// 							/>
		// 							<TextInput
		// 								form={businessForm}
		// 								errors={errors}
		// 								handleChange={handleChange}
		// 								name="dti_registration"
		// 								label="DTI Registration (for sole proprietorship)"
		// 								variant="primary"
		// 								type="file"
		// 							/>
		// 							<TextInput
		// 								form={businessForm}
		// 								errors={errors}
		// 								handleChange={handleChange}
		// 								name="sec_registration"
		// 								label="SEC Registration (for sole corporation/partnership)"
		// 								variant="primary"
		// 								type="file"
		// 							/>
		// 							<TextInput
		// 								form={businessForm}
		// 								errors={errors}
		// 								handleChange={handleChange}
		// 								name="sanitary_registration"
		// 								label="Sanitary Permit (for food businesses)"
		// 								variant="primary"
		// 								type="file"
		// 							/>
		// 						</>
		// 					)}

		// 					{/* Step 4: Product & Services */}
		// 					{businessStep === 4 && (
		// 						<>
		// 							<span className="text-md  font-bold text-gray-500">
		// 								Product & Services
		// 							</span>
		// 							<p className="text-muted text-center">
		// 								Search and select what you offer to help customers find you.
		// 							</p>
		// 							<Select2Dropdown
		// 								form={businessForm}
		// 								errors={errors}
		// 								handleChange={handleChange}
		// 								name="products"
		// 								label="Search Product/Servicess"
		// 								options={options}
		// 								isMulti={true}
		// 								variant="primary"
		// 								type="select"
		// 								placeHolder="Type to search offering"
		// 							/>
		// 							<TextInput
		// 								form={businessForm}
		// 								errors={errors}
		// 								handleChange={handleChange}
		// 								name="additional_product"
		// 								label="Additional Product/Services (Optional)"
		// 								variant="primary"
		// 								type="textarea"
		// 								placeHolder="Descrive any additional products or services not listed above..."
		// 							/>
		// 						</>
		// 					)}

		// 					{/* Step 5: Review the Informations */}
		// 					{businessStep === 5 && (
		// 						<>
		// 							<span className="text-md  font-bold text-gray-500">
		// 								Review your Information
		// 							</span>
		// 							<hr />
		// 						</>
		// 					)}

		// 					{/* Navigation Buttons */}
		// 					<div className="flex justify-between mt-4">
		// 						{businessStep < 6 && businessStep > 1 && (
		// 							<Button
		// 								variant="outline"
		// 								type="button"
		// 								onClick={() => setBusinessStep(businessStep - 1)}
		// 								>
		// 								Back
		// 							</Button>
		// 						)}

		// 						{businessStep < 5 && (
		// 							<Button
		// 								variant="primary"
		// 								type="button"
		// 								onClick={() => setBusinessStep(businessStep + 1)}>
		// 								Next
		// 							</Button>
		// 						)}

		// 						{businessStep === 5 && (
		// 							<Button 
		// 								variant="primary" 
		// 								type="submit" 
		// 								>
		// 									Review & Submit Application
		// 							</Button>
		// 						)}
		// 					</div>
		// 					{businessStep === 5 && (
		// 						<Button 
		// 							variant="outline" 
		// 							type="button" 
		// 							>
		// 							Save as Draft
		// 						</Button>
		// 					)}
		// 				</form>
		// 	</div>
		// </div>
