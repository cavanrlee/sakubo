import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { loginUser } from "@/pages/login/LoginController";
import { OTPValidation } from "@/pages/login/OTPController";
import TextInput from "@/components/inputs";
import Button from "@/components/buttons/Button";
import Logo from "@/components/Logo";
import Alert from "@/utils/alert";


export default function OTPReceiving() {
	;

	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const [otp, setOtp] = useState(Array(6).fill(''));
	const mobile_number = localStorage.getItem("mobile_number") || 0;

	const handleChange = (e, index) => {
		const value = e.target.value.replace(/[^0-9]/g, '');

		if (!value) return;

		const otp_received = [...otp];
		otp_received[index] = value[0];

		setOtp(otp_received);

		if (index < 5) {
			document.getElementById(`otp-${index + 1}`).focus();
		}
	};

	const handleKeyDown = (e, index) => {
		if (e.key === 'Backspace') {
			const otp_received = [...otp];

			if (otp[index]) {
				otp_received[index] = '';
			} else if (index > 0) {
				document.getElementById(`otp-${index - 1}`).focus();
			}

			setOtp(otp_received);
		}
	};

	const handleOTPValidation = async (e) => {
		e.preventDefault();
		setErrors({});

		const joined_OTP = otp.join("");

		if (joined_OTP.length !== 6) {
			setErrors({
				OTP: ["Invalid OTP."]
			});
			return;
		}

		const form_values = {
			OTP: joined_OTP,
			mobile_number
		};

		try {
			const data = await OTPValidation(form_values);
			localStorage.setItem("user_id", data.user_id);
			navigate("/ChangePassword");
		} catch (err) {
			if (err.response?.data?.error?.fields) {
				setErrors(err.response.data.error.fields);
			} else {
				const error_message =
					err.response?.data?.error?.message ||
					err.response?.data?.error ||
					"Something went wrong";

				setErrors({
					OTP: [error_message]
				});
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
								<span className="text-xl font-semibold text-black!">Enter Verification Code.</span>
							</div>

							<div className="col-12 text-center my-1">
								<span className="text-sm">Enter your the OTP/verification code sent to your number.</span>
							</div>
						</div>

						<div className="row mt-2">
							<div className="col-12 text-center my-1">
								<div className="d-flex gap-2">
									{otp.map((digit, index) => (
										<input key={index} id={`otp-${index}`} className="form-control text-center otp-input" type="text" maxLength="1" value={digit} onChange={(e) => handleChange(e, index)} onKeyDown={(e) => handleKeyDown(e, index)} inputMode="numeric" />
									))}
								</div>
								{errors.OTP && (
									<small className="text-danger">
										{errors.OTP.join(" ")}
									</small>
								)}
							</div>

							<div className="col-12 mt-2">
								<div className="row px-3">
									<Button variant="primary" onClick={handleOTPValidation}>Send Verification Code</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
