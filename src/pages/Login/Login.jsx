import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import saKuboLogo from '/saKubo.svg';
import { loginUser } from "@/pages/login/LoginController";
import TextInput from "@/components/TextInput";


export default function SaKuboLogin() {;
	const [errors, setErrors] = useState({});
  	const navigate = useNavigate();
 
	const [form, setForm] = useState({
		email: "",
		password: ""
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

  	const handleLogin = async (e) => {
		e.preventDefault();
		setErrors({});
		try {
			const data = await loginUser(form);
			localStorage.setItem("auth_token", data.token);
			navigate("/dashboard");
		} catch (err) {
			if (err.response?.data?.error?.fields) {
				setErrors(err.response.data.error.fields);
			}
		}
  	};

	return (
		<div className="col-12">
			<div className="card border-0 p-0">
				<div className="row">
					<div className="col-12 d-flex justify-center">
						<img src={saKuboLogo} alt="saKubo" className='max-w-75'/>
					</div>
				</div>
			</div>

			<div className="card border-0 p-0">
				<div className="row mb-2">
					<div className="col-12 my-2">
						<span className="text-2xl text-gray-600! font-bold">
							Welcome back!
						</span>
					</div>
					<div className="col-12 my-2">
						<span className="text-md text-gray-600!">
							Sign in to your account.
						</span>
					</div>
				</div>

				<div className="row mt-4">
					<form onSubmit={handleLogin} id="login-form">
						<div className="col-12 my-2">
							<TextInput
								form={form}
								errors={errors}
								handleChange={handleChange}
								name="email"
								label="Mobile Number/Email"
								variant="primary"
								type="text"
								placeHolder="+639XX-XXX-XXXX"
							/>
						</div>
						<div className="col-12 my-2">
							<TextInput
								form={form}
								errors={errors}
								handleChange={handleChange}
								name="password"
								label="Password"
								variant="primary"
								type="text"
								placeHolder="Enter your password"
							/>
						</div>
					</form>
				</div>

				<div className="row mt-2">
					<div className="col-6">
						<TextInput
							form={form}
							errors={errors}
							handleChange={handleChange}
							name="remember"
							label="Remember me"
							variant="primary"
							type="checkbox"
						/>
					</div>
					<div className="col-6 text-right">
						<a href="#" className="text-gray-600! px-2 font-semibold hover:cursor-pointer hover:text-gray-900! no-underline!">
							Forgot password?
						</a>
					</div>
				</div>

				<div className="row mt-2">
					<div className="col-12 text-center my-2">
						<div className="row mx-1">
							<button
								className="btn btn-primary h-13"
								type="button"
								onClick={() =>
									document
										.getElementById("login-form")
										.requestSubmit()
									}
								>
								<span className="text-white font-bold">
									Log In
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
