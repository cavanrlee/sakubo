import React, { useState, useEffect } from "react";
import { registerUser } from "@/pages/register/RegisterController";
import { useNavigate } from "react-router-dom";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button"; 
import Select2Dropdown from "@/components/Select2Dropdown";
import Tabs from "@/components/Tabs";
import Logo from "@/components/Logo";
import Alert from "@/utils/alert";

export default function SaKuboRegister() {
	const [activeTab, setActiveTab] = useState("personal");
	const [businessStep, setBusinessStep] = useState(1); // Step state for Business tab

	const navigate = useNavigate();

	const tabList = [
		{ key: "personal", label: "Personal" },
		{ key: "business", label: "Business" },
	];

	const options = [
		{ value: "option1", label: "Groceries" },
		{ value: "option2", label: "Cooked Meals" },
		{ value: "option3", label: "Delivery" },
		{ value: "option4", label: "Piso Wifi" },
	];

		
	const [form, setForm] = useState({
	account_type: "personal",

	// personal
	lastname: "",
	nickname: "",
	email: "",
	password: "",
	number: 0,
	barangay: "",
	city: "",
	province: "",

	// business
	business_name: "",
	business_category: "",
	business_type: "",
	business_email: "",
	business_website: "",
	business_address: "",
	business_barangay: "",
	business_city: "",
	business_province: "",
	business_number: 0,
	business_notes: "",
	});

	const [errors, setErrors] = useState({});

	useEffect(() => {
		setForm((prev) => ({
			...prev,
			account_type: activeTab,
		}));

		if(activeTab === "business") setBusinessStep(1); // reset step on tab change
	}, [activeTab]);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors({});

		const accountType = form.account_type;

		// Dynamically pick relevant fields
		const payload = Object.fromEntries(
			Object.entries(form).filter(([key, value]) => {
			if (key === "account_type") return true; // always include account_type
			return accountType === "personal"
				? !key.startsWith("business_")
				: key.startsWith("business_");
			})
		);

		try {
			const res = await registerUser(payload);
			localStorage.setItem("api_token", res.token);
			Alert.success(
			"Thank you!",
			<small>Your submission was received successfully.</small>
			);
			navigate("/login")
		} catch (err) {
			if (err.response?.data?.error?.fields) {
			setErrors(err.response.data.error.fields);
			}
		}
	};

	return (
		<div className="row">
			<div className="col-12 max-w-xl mx-auto">
			<Logo/>

			{/* TITLE */}
			<div className="row mb-4 text-center">
				<div className="col-12">
				<span className="text-2xl text-gray-600 font-bold">
				Create Account
				</span>
				</div>
				<div className="col-12">
				<span className="text-md text-gray-500">
				Join our community today
				</span>
				</div>
			</div>

			{/* TABS */}
			<Tabs tabs={tabList} activeTab={activeTab} setActiveTab={setActiveTab} />

			{/* FORM */}
			<form className="w-full mt-6 flex flex-col gap-3 pb-10">
				{activeTab === "personal" ? (
				<>
				{/* Personal tab unchanged */}
				<div className="flex gap-2">
					<div className="flex-1">
					<TextInput
						form={form}
						errors={errors}
						handleChange={handleChange}
						name="firstname"
						label="First Name"
						variant="primary"
						type="text"
						placeHolder="First Name"
					/>
					</div>
					<div className="flex-1">
					<TextInput
						form={form}
						errors={errors}
						handleChange={handleChange}
						name="middlename"
						label="Middle Name"
						variant="primary"
						type="text"
						placeHolder="Middle Name"
					/>
					</div>
					<div className="flex-1">
					<TextInput
						form={form}
						errors={errors}
						handleChange={handleChange}
						name="lastname"
						label="Last Name"
						variant="primary"
						type="text"
						placeHolder="Last Name"
					/>
					</div>
				</div>

				<div>
					<TextInput
					form={form}
					errors={errors}
					handleChange={handleChange}
					name="nickname"
					label="Nickname (Optional)"
					variant="primary"
					type="text"
					placeHolder="Nickname"
					/>
				</div>

				<div>
					<TextInput
					form={form}
					errors={errors}
					handleChange={handleChange}
					name="number"
					label="Number"
					variant="primary"
					type="number"
					placeHolder="Number"
					/>
				</div>

				<div>
					<TextInput
					form={form}
					errors={errors}
					handleChange={handleChange}
					name="email"
					label="Email (Optional)"
					variant="primary"
					type="email"
					placeHolder="Email"
					/>
				</div>

				<div>
					<TextInput
					form={form}
					errors={errors}
					handleChange={handleChange}
					name="password"
					label="Password"
					variant="primary"
					type="password"
					placeHolder="Password"
					/>
				</div>

				<div className="flex gap-2">
					<div className="flex-1">
					<TextInput
						form={form}
						errors={errors}
						handleChange={handleChange}
						name="barangay"
						label="Barangay"
						variant="primary"
						type="text"
						placeHolder="Barangay"
					/>
					</div>
					<div className="flex-1">
					<TextInput
						form={form}
						errors={errors}
						handleChange={handleChange}
						name="city"
						label="City"
						variant="primary"
						type="text"
						placeHolder="City"
					/>
					</div>
					<div className="flex-1">
					<TextInput
						form={form}
						errors={errors}
						handleChange={handleChange}
						name="province"
						label="Province"
						variant="primary"
						type="text"
						placeHolder="Province"
					/>
					</div>
				</div>
				<Button variant="primary" type="submit" onClick={handleSubmit}>Create Personal Account</Button>
				</>
				) : (
				<>
				{/* Business tab with 4 steps */}
				{/* Navigation Dots */}
				<div className="flex justify-center gap-2">
					{[1, 2, 3, 4, 5].map((dot) => (
					<span key={dot} onClick ={() => setBusinessStep(dot)} className={`w-3 h-3 rounded-full ${
						businessStep === dot ? "bg-[#4CAF50]" : "bg-gray-300"
						}`}
					></span>
					))}
				</div>

				{/* Step 1: Basic Info */}
				{businessStep === 1 && (
					<>
					<span className="text-md  font-bold text-gray-500">
						Business Information
					</span>

					<TextInput
						form={form}
						errors={errors}
						handleChange={handleChange}
						name="business_name"
						label="Business Name"
						variant="primary"
						type="text"
						placeHolder="Business Name"
					/>
					<TextInput
						form={form}
						errors={errors}
						handleChange={handleChange}
						name="business_category"
						label="Business Category"
						variant="primary"
						type="text"
						placeHolder="Business Category"
					/>
					<TextInput
						form={form}
						errors={errors}
						handleChange={handleChange}
						name="business_type"
						label="Business Type"
						type="select"
						variant="primary"
						placeHolder="Business Type"
						options={[
							{ value: "Local", label: "Local" },
							{ value: "International", label: "International" },
						]}
					/>
					<TextInput
						form={form}
						errors={errors}
						handleChange={handleChange}
						name="business_email"
						label="Business Email (Optional)"
						variant="primary"
						type="email"
						placeHolder="Email"
					/>
					<TextInput
						form={form}
						errors={errors}
						handleChange={handleChange}
						name="business_website"
						label="Website (Optional)"
						variant="primary"
						type="text"
						placeHolder="Website"
					/>
					<TextInput
						form={form}
						errors={errors}
						handleChange={handleChange}
						name="business_address"
						label="Street Address"
						variant="primary"
						type="text"
						placeHolder="Street Address"
					/>
					<div className="flex gap-2">
						<div className="flex-1">
							<TextInput
								form={form}
								errors={errors}
								handleChange={handleChange}
								name="business_barangay"
								label="Barangay"
								variant="primary"
								type="text"
								placeHolder="Barangay"
							/>
						</div>
						<div className="flex-1">
							<TextInput
								form={form}
								errors={errors}
								handleChange={handleChange}
								name="business_city"
								label="City"
								variant="primary"
								type="text"
								placeHolder="City"
							/>
						</div>
						<div className="flex-1">
							<TextInput
								form={form}
								errors={errors}
								handleChange={handleChange}
								name="business_province"
								label="Province"
								variant="primary"
								type="text"
								placeHolder="Province"
							/>
						</div>
					</div>
					<TextInput
						form={form}
						errors={errors}
						handleChange={handleChange}
						name="business_number"
						label="Contact Number"
						variant="primary"
						type="number"
						placeHolder="Contact Number"
					/>
					<div className="flex gap-2">
						<div className="flex-1">
							<TextInput
								form={form}
								errors={errors}
								handleChange={handleChange}
								name="days_of_operation"
								label="Days"
								type="select"
								variant="primary"
								placeHolder="Select Days"
								options={[
									{ value: "5", label: "5" },
									{ value: "6", label: "6" },
									{ value: "7", label: "7" },
								]}
							/>
						</div>
						<div className="flex-1">
							<TextInput
								form={form}
								errors={errors}
								handleChange={handleChange}
								name="from_time"
								label="From"
								variant="primary"
								type="time"
								placeHolder=""
							/>
						</div>
						<div className="flex-1">
							<TextInput
								form={form}
								errors={errors}
								handleChange={handleChange}
								name="to_time"
								label="To"
								variant="primary"
								type="time"
								placeHolder=""
							/>
						</div>
					</div>
					<span className="text-sm text-left font-bold text-gray-700">
						Payment Method Accepted
					</span>
					<div className="flex gap-2">
						<div className="flex-1 border p-3 border-gray-500 rounded-lg">
							<TextInput
								form={form}
								errors={errors}
								handleChange={handleChange}
								name="cash"
								label="Cash"
								variant="primary"
								type="checkbox"
							/>
						</div>
						<div className="flex-1 border p-3 border-gray-500 rounded-lg">
							<TextInput
								form={form}
								errors={errors}
								handleChange={handleChange}
								name="gcash"
								label="GCash"
								variant="primary"
								type="checkbox"
							/>
						</div>
					</div>
					<div className="flex gap-2">
						<div className="flex-1 border p-3 border-gray-500 rounded-lg">
							<TextInput
								form={form}
								errors={errors}
								handleChange={handleChange}
								name="paymaya"
								label="PayMaya"
								variant="primary"
								type="checkbox"
							/>
						</div>
						<div className="flex-1 border p-3 border-gray-500 rounded-lg">
							<TextInput
								form={form}
								errors={errors}
								handleChange={handleChange}
								name="utang_ok"
								label="Utang OK"
								variant="primary"
								type="checkbox"
							/>
						</div>
					</div>
					<span className="text-sm text-left font-bold text-gray-700">
						Service Option (Optional)
					</span>
					<div className="flex gap-2">
						<div className="flex-1 border p-3 border-gray-500 rounded-lg">
							<TextInput
								form={form}
								errors={errors}
								handleChange={handleChange}
								name="delivery"
								label="Delivery"
								variant="primary"
								type="checkbox"
							/>
						</div>
						<div className="flex-1 border p-3 border-gray-500 rounded-lg">
							<TextInput
								form={form}
								errors={errors}
								handleChange={handleChange}
								name="meetup"
								label="Meet Up"
								variant="primary"
								type="checkbox"
							/>
						</div>
					</div>
					<div className="flex gap-2">
						<div className="flex-1 border p-3 border-gray-500 rounded-lg">
							<TextInput
								form={form}
								errors={errors}
								handleChange={handleChange}
								name="pickup"
								label="Pick Up"
								variant="primary"
								type="checkbox"
							/>
						</div>
						<div className="flex-1 p-3">
						
						</div>
					</div>
						<TextInput
							form={form}
							errors={errors}
							handleChange={handleChange}
							name="business_notes"
							label="Additional Information (Optional)"
							variant="primary"
							type="textarea"
							placeHolder="Additional notes"
						/>
					</>
				)}

				{/* Step 2: Social Media */}
				{businessStep === 2 && (
					<>
						<span className="text-md  font-bold text-gray-500">
							Social Media (All Optional)
						</span>
						<span className="text-md text-gray-500">
							Help customers find you on social media
						</span>
						<TextInput
							form={form}
							errors={errors}
							handleChange={handleChange}
							name="tiktok"
							label="Tiktok Username"
							variant="primary"
							type="text"
							placeHolder="@yourbusiness"
						/>
						<TextInput
							form={form}
							errors={errors}
							handleChange={handleChange}
							name="facebook"
							label="Facebook Page/Profile"
							variant="primary"
							type="text"
							placeHolder="facebook.com/yourbusiness"
						/>
						<TextInput
							form={form}
							errors={errors}
							handleChange={handleChange}
							name="instagram"
							label="Instagram"
							variant="primary"
							type="text"
							placeHolder="@yourbusiness"
						/>
						<TextInput
							form={form}
							errors={errors}
							handleChange={handleChange}
							name="website"
							label="Website URL"
							variant="primary"
							type="text"
							placeHolder="http://yourbusiness.com"
						/>
					</>
				)}

				{/* Step 3: Business Requirements */}
				{businessStep === 3 && (
					<>
						<span className="text-md  font-bold text-gray-500">
							Business Requirements
						</span>
						<div className="alert text-left alert-danger border-0 border-start border-4 border-danger d-flex align-items-start gap-3 rounded-3">
							<i className="bx bx-error-circle mt-1"></i>While providing documents is optional,
							You're welcome to register without them. You can easily upload any necessary
							documents at your convenience within your Business Account settings.
						</div>
						<p className="text-muted text-center">
							Uploading business documents helps build trust with customers and improves your business credibility on saKubo.
						</p>

						<TextInput
							form={form}
							errors={errors}
							handleChange={handleChange}
							name="business_permit"
							label="Business Permit / LGU Permit"
							variant="primary"
							type="file"
						/>
						<TextInput
							form={form}
							errors={errors}
							handleChange={handleChange}
							name="store_front_photo"
							label="Store Front Photo"
							variant="primary"
							type="file"
						/>
						<TextInput
							form={form}
							errors={errors}
							handleChange={handleChange}
							name="bir_certificate_of_registration"
							label="BIR Certificate of Registration"
							variant="primary"
							type="file"
						/>
						<TextInput
							form={form}
							errors={errors}
							handleChange={handleChange}
							name="dti_registration"
							label="DTI Registration (for sole proprietorship)"
							variant="primary"
							type="file"
						/>
						<TextInput
							form={form}
							errors={errors}
							handleChange={handleChange}
							name="sec_registration"
							label="SEC Registration (for sole corporation/partnership)"
							variant="primary"
							type="file"
						/>
						<TextInput
							form={form}
							errors={errors}
							handleChange={handleChange}
							name="sec_registration"
							label="Sanitary Permit (for food businesses)"
							variant="primary"
							type="file"
						/>
					</>
				)}

				{/* Step 4: Product & Services */}
				{businessStep === 4 && (
					<>
						<span className="text-md  font-bold text-gray-500">
							Product & Services
						</span>
						<p className="text-muted text-center">
							Search and select what you offer to help customers find you.
						</p>
						<Select2Dropdown
							form={form}
							errors={errors}
							handleChange={handleChange}
							name="products"
							label="Search Product/Servicess"
							options={options}
							isMulti={true}
							variant="primary"
							placeHolder="Type to search offering"
						/>
						<TextInput
							form={form}
							errors={errors}
							handleChange={handleChange}
							name="additional_product"
							label="Additional Product/Services (Optional)"
							variant="primary"
							type="textarea"
							placeHolder="Descrive any additional products or services not listed above..."
						/>
					</>
				)}

				{/* Step 5: Review the Informations */}
				{businessStep === 5 && (
					<>
						<span className="text-md  font-bold text-gray-500">
							Review your Information
						</span>
						<hr />
					</>
				)}

				{/* Navigation Buttons */}
				<div className="flex justify-between mt-4">
					{businessStep < 6 && businessStep > 1 && (
						<Button
							variant="outline"
							type="button"
							onClick={() => setBusinessStep(businessStep - 1)}
							>
							Back
						</Button>
					)}

					{businessStep < 5 && (
						<Button
							variant="primary"
							type="button"
							onClick={() => setBusinessStep(businessStep + 1)}>
							Next
						</Button>
					)}

					{businessStep === 5 && (
						<Button 
							variant="primary" 
							type="submit" 
							onClick={handleSubmit}>
								Review & Submit Application
						</Button>
					)}
				</div>

					{businessStep === 5 && (
						<Button 
							variant="outline" 
							type="button" 
							onClick={''}>
							Save as Draft
						</Button>
					)}
				</>
				)}
			</form>
			</div>
		</div>
	);
}
