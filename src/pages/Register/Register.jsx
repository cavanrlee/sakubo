import React, { useState, useEffect } from "react";
import { registerUser } from "@/pages/register/RegisterController";
import { useNavigate } from "react-router-dom";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button"; 
import Select2Dropdown from "@/components/Select2Dropdown";
import Tabs from "@/components/Tabs";
import Logo from "@/components/Logo";
import Alert from "@/utils/alert";
import { Icon } from '@iconify/react';


export default function SaKuboRegister() {
	// const [activeTab, setActiveTab] = useState("personal");
	// const [businessStep, setBusinessStep] = useState(1);

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

	const [personalForm, setPersonalForm] = useState({
		firstname: "",
		middlename: "",
		lastname: "",
		nickname: "",
		email: "",
		password: "",
		number: "",
		barangay: "",
		city: "",
		province: ""
	});

	// const [businessForm, setBusinessForm] = useState({
	// 	business_name: "",
	// 	business_category: "",
	// 	business_type: "",
	// 	business_address: "",
	// 	business_barangay: "",
	// 	business_city: "",
	// 	business_province: "",
	// 	business_number: "",

	// 	days_of_operation: "",
	// 	from_time: "",
	// 	to_time: "",

	// 	business_notes: "",

	// 	cash: false,
	// 	gcash: false,
	// 	paymaya: false,
	// 	utang_ok: false,

	// 	delivery: false,
	// 	meetup: false,
	// 	pickup: false,

	// 	tiktok: "",
	// 	facebook: "",
	// 	instagram: "",
	// 	website: "",

	// 	business_permit: null,
	// 	store_front_photo: null,
	// 	bir_certificate_of_registration: null,
	// 	dti_registration: null,
	// 	sec_registration: null,
	// 	sanitary_registration: null,

	// 	products: [],
	// 	additional_product: ""
	// });

	const [errors, setErrors] = useState({});

	// useEffect(() => {
	// 	setBusinessStep(activeTab === "business" ? 1 : 0);
	// }, [activeTab]);

	const handleChange = (e) => {
		const { name, value, type, checked, files } = e.target;

		let finalValue;

		if (type === "checkbox") finalValue = checked ? 1 : 0;
		else if (type === "file") finalValue = files?.[0] ?? null;
		else finalValue = value;

		if (name in personalForm) {
			setPersonalForm((prev) => ({ ...prev, [name]: finalValue }));
			return;
		}

		// if (name in businessForm) {
		// 	setBusinessForm((prev) => ({ ...prev, [name]: finalValue }));
		// 	return;
		// }
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors({});
		const formData = new FormData();

		Object.entries(personalForm).forEach(([key, value]) => {

			// FILES
			if (value instanceof File) {
				formData.append(key, value);
			}

			// ARRAY (products, days_of_operation)
			else if (Array.isArray(value)) {
				value.forEach(v => formData.append(`${key}[]`, v));
			}

			// BOOLEAN
			else if (typeof value === "boolean") {
				formData.append(key, value ? "1" : "0");
			}

			// DEFAULT
			else {
				formData.append(key, value ?? "");
			}
		});

		try {
			const res = await registerUser(formData);

			localStorage.setItem("api_token", res.token);

			Alert.success(
				"Thank you!",
				<small>Your submission was received successfully.</small>
			);

			navigate("/login");

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
				<form className="w-full mt-6 flex flex-col gap-3 pb-10" onSubmit={handleSubmit}>

				{/* Personal tab unchanged */}
				<div className="flex gap-2">
					<div className="flex-1">
					<TextInput
						form={personalForm}
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
						form={personalForm}
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
						form={personalForm}
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
					form={personalForm}
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
					form={personalForm}
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
					form={personalForm}
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
					form={personalForm}
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
						form={personalForm}
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
						form={personalForm}
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
						form={personalForm}
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
				<Button variant="primary" type="submit">Create Personal Account</Button>
				</form>
			</div>
		</div>
	);
}
