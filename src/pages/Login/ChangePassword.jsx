import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { changePassword } from '@/pages/login/LoginController';
import TextInput from "@/components/inputs";
import Button from "@/components/buttons/Button";
import Logo from "@/components/Logo";
import Alert from "@/utils/alert";

export default function OTPSending() {
	;

	const navigate = useNavigate();
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);

	const user_id = localStorage.getItem("user_id") || 0;

	const [form, setForm] = useState({
		user_id: user_id,
		new_password: "",
		confirm_password: ""
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const validatePassword = (password) => {
		const errors = [];

		if (password.length < 8) {
			errors.push("Minimum 8 characters.");
		}

		if (password.length > 30) {
			errors.push("Maximum 30 characters.");
		}

		if (!/[A-Za-z]/.test(password)) {
			errors.push("At least 1 letter required.");
		}

		if (!/\d/.test(password)) {
			errors.push("At least 1 number required.");
		}

		return errors;
	};

	const handleChangePassword = async (e) => {
		e.preventDefault();
		setErrors({});

		const new_errors = {};

		const passwordErrors = validatePassword(form.new_password);

		if (passwordErrors.length > 0) {
			new_errors.new_password = passwordErrors;
		}

		if (form.new_password !== form.confirm_password) {
			new_errors.confirm_password = ["Passwords do not match"];
		}

		if (Object.keys(new_errors).length > 0) {
			setErrors(new_errors);
			return;
		}

		try {
			const data = await changePassword(form);

			console.log(data);
			navigate("/Login");
		} catch (err) {
			if (err.response?.data?.error?.fields) {
				setErrors(err.response.data.error.fields);
			} else {
				const message = err.response?.data?.error?.message || "Something went wrong";
				Alert.warning("", <small>{message}</small>);
			}
		}
	};

	return (
		<div className="row mt-5">
			<div className="col-12">
				<div className="card border-none!">
					<div className="card-body">
						<div className="row">
							<div className="col-12 text-center my-1">
								<span className="text-xl font-semibold text-black!">Change Password</span>
							</div>

							<div className="col-12 text-center my-1">
								<span className="text-sm">Enter a new password for your account.</span>
							</div>
						</div>

						<div className="row mt-2">
							<form className='mo-0! form-class' onSubmit={handleChangePassword} id="change-password-form">
								<div className="col-12 text-left my-1">
									<label className='text-sm font-semibold text-gray-600 my-2' htmlFor="">New Password</label>
									<input className="form-control" value={form.new_password} onChange={handleChange} name="new_password" label="New Password" type="password" />
									{errors.new_password && (
										<small className="text-danger">
											{errors.new_password.join(" ")}
										</small>
									)}
								</div>
								<div className="col-12 text-left my-1">
									<label className='text-sm font-semibold text-gray-600 my-2' htmlFor="">Confirm Password</label>
									<input className="form-control" value={form.confirm_password} onChange={handleChange} name="confirm_password" label="Confirms Password" type="password" />
									{errors.confirm_password && (
										<small className="text-danger">
											{errors.confirm_password.join(" ")}
										</small>
									)}
								</div>
							</form>

							<div className="col-12 mt-2">
								<div className="row px-2">
									<Button variant="primary" type="submit" onClick={handleChangePassword}>Change Password</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
