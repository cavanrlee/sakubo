import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { sendOTP } from '@/pages/login/OTPController';
import { sendOTPWhatsapp } from '@/pages/login/OTPController';
import TextInput from "@/components/inputs";
import Button from "@/components/buttons/Button";
import Logo from "@/components/Logo";
import Alert from "@/utils/alert";

export default function OTPSending() {
	;

	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const [form, setForm] = useState({
		mobile_number: ""
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleOTPWhatsappSending = async (e) => {
		e.preventDefault();
		setErrors({});

		try {
			const data = await sendOTPWhatsapp(form);

			localStorage.setItem("mobile_number", data.mobile_number);
			navigate("/OTP-receiving");
		} catch (err) {
			if (err.response?.data?.error?.fields) {
				setErrors(err.response.data.error.fields);
			} else {
				Alert.warning(
					"",
					<small>{err.response.data.error.message}</small>
				);
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
								<span className="text-xl font-semibold text-black!">Forgot Your Password?</span>
							</div>

							<div className="col-12 text-center my-1">
								<span className="text-sm">Enter your phone number to receive a verification code.</span>
							</div>
						</div>

						<div className="row mt-2">
							<div className="col-12 text-center my-1">
								<form className='mo-0! form-class' onSubmit={handleOTPWhatsappSending} id="otp-sending-form">
									<div className="input-group" name="mobile-number-input-group">
										<select className="form-select w-25" name="country-calling-code" id="country-calling-code">
											<option value="+63" data-country-id="34">PH</option>
										</select>
										{/* <TextInput
											className="form-control! w-75!"
											form={form}
											errors={errors}
											handleChange={handleChange}
											name="mobile-number"
											label="Mobile number"
											variant="primary"
											type="text"
											placeHolder="9*********"
										/> */}
										<input className="form-control w-75" placeholder="9*********" value={form.mobile_number} onChange={handleChange} name="mobile_number" label="Mobile number" type="text" />
									</div>
								</form>
							</div>

							<div className="col-12 mt-2">
								<div className="row px-2">
									<Button variant="primary" type="submit" onClick={handleOTPWhatsappSending}>Send Verification Code</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
