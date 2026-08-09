import React, { useState, useEffect } from "react";
import { registerUser, getAddressMaintenance } from "@/pages/register/RegisterController";
import { useNavigate } from "react-router-dom";
import TextInput from "@/components/inputs";
import Button from "@/components/buttons/Button";
import Tabs from "@/components/tabs/Tabs";
import Logo from "@/components/Logo";
import Alert from "@/utils/alert";
import { Icon } from '@iconify/react';



export default function SaKuboRegister() {
	const [errors, setErrors] = useState({});
	const [regions, setRegions] = useState([]);
	const [provinces, setProvinces] = useState([]);
	const [municipalities, setMunicipalities] = useState([]);
	const [barangays, setBarangays] = useState([]);


	useEffect(() => {
		loadAddressMaintenance();
	}, []);


	const navigate = useNavigate();


	const loadAddressMaintenance = async () => {
		try {
			const res = await getAddressMaintenance();
			setRegions(res || []);
		} catch (err) {
			console.error(err);
		}
	};

	const handleAddressChange = (e) => {
		const { name, value, type, checked, files } = e.target;

		let finalValue;

		if (type === "checkbox") finalValue = checked ? 1 : 0;
		else if (type === "file") finalValue = files?.[0] ?? null;
		else finalValue = value;

		switch (name) {
			case "region_id": {
				const region = regions.find(
					r => r.region_id == finalValue
				);

				setProvinces(region?.provinces || []);
				setMunicipalities([]);
				setBarangays([]);

				const updated = {
					...personalForm,
					region_id: finalValue,
					province_id: "",
					municipality_id: "",
					barangay_id: "",
				};

				setPersonalForm(updated);
				geocodeCurrentAddress(updated);

				break;
			}

			case "province_id": {
				const province = provinces.find(
					p => p.province_id == finalValue
				);

				setMunicipalities(province?.municipalities || []);
				setBarangays([]);

				const updated = {
					...personalForm,
					province_id: finalValue,
					municipality_id: "",
					barangay_id: "",
				};

				setPersonalForm(updated);
				geocodeCurrentAddress(updated);

				break;
			}

			case "municipality_id": {
				const municipality = municipalities.find(
					m => m.municipality_id == finalValue
				);

				setBarangays(municipality?.barangays || []);

				const updated = {
					...personalForm,
					municipality_id: finalValue,
					barangay_id: "",
				};

				setPersonalForm(updated);
				geocodeCurrentAddress(updated);

				break;
			}

			case "barangay_id": {

				const updated = {
					...personalForm,
					barangay_id: finalValue,
				};

				setPersonalForm(updated);
				geocodeCurrentAddress(updated);

				break;
			}

			default: {
				setPersonalForm(prev => ({
					...prev,
					[name]: finalValue,
				}));
			}
		}
	};


	const [personalForm, setPersonalForm] = useState({
		firstname: "",
		middlename: "",
		lastname: "",
		nickname: "",
		email: "",
		password: "",
		number: "",
		region_id: "",
		barangay_id: "",
		municipality_id: "",
		province_id: "",
	});

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
		<div className="container-fluid">
			<div className="row py-4">
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
					</div>
					<div className="flex gap-2">
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
					</div>
					<div className="flex gap-2">
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
							name="region_id"
							label="Region"
							type="select"
							variant="primary"
							placeHolder="Region"
							handleChange={handleAddressChange}
							options={regions.map(r => ({
								value: r.region_id,
								label: r.region_name,
							}))}
						/>
						</div>
					</div>

					<div className="flex gap-2">
						<div className="flex-1">
						<TextInput
							form={personalForm}
							errors={errors}
							name="province_id"
							label="Province"
							type="select"
							variant="primary"
							placeHolder="Province"
							handleChange={handleAddressChange}
							options={provinces.map(p => ({
								value: p.province_id,
								label: p.province_name,
							}))}
						/>
						</div>
					</div>
					<div className="flex gap-2">
						<div className="flex-1">
						<TextInput
							form={personalForm}
							errors={errors}
							name="municipality_id"
							label="City"
							type="select"
							variant="primary"
							placeHolder="City"
							handleChange={handleAddressChange}
							options={municipalities.map(m => ({
								value: m.municipality_id,
								label: m.municipality_name,
							}))}
						/>
						</div>
					</div>
					<div className="flex gap-2">
						<div className="flex-1">
						<TextInput
							form={personalForm}
							errors={errors}
							name="barangay_id"
							label="Barangay"
							type="select"
							variant="primary"
							placeHolder="Barangay"
							handleChange={handleAddressChange}
							options={barangays.map(b => ({
								value: b.barangay_id,
								label: b.barangay_name,
							}))}
						/>
						</div>
					</div>
					<Button variant="primary" type="submit">Create Personal Account</Button>
					</form>
				</div>
			</div>
		</div>

	);
}
