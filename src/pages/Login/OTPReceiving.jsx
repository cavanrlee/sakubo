import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { loginUser } from "@/pages/login/LoginController";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button"; 
import Logo from "@/components/Logo";
import Alert from "@/utils/alert";



export default function SaKuboLogin() {;

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
								<div className="d-flex justify-content-center gap-2" id="otp-container">
									<input className="form-control text-center otp-input" type="number" maxlength="1" inputmode="numeric" pattern="[0-9]*"/>
									<input className="form-control text-center otp-input" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]*"/>
									<input className="form-control text-center otp-input" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]*"/>
									<input className="form-control text-center otp-input" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]*"/>
									<input className="form-control text-center otp-input" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]*"/>
									<input className="form-control text-center otp-input" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]*"/>
								</div>
							</div>

							<div className="col-12 mt-2">
								<div className="row px-3">
									<Button variant="primary" type="submit">Send Verification Code</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
