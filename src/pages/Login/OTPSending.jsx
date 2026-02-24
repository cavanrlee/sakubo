import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { loginUser } from "@/pages/login/LoginController";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button"; 
import Logo from "@/components/Logo";
import Alert from "@/utils/alert";



export default function OTPSending() {;

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
							<div className="input-group" name="mobile-number-input-group">
								<select className="form-select w-25" name="country-calling-code" id="country-calling-code">
									<option value="+63" data-country-id="34">PH</option>
									<option value="+63" data-country-id="34">PH</option>
									<option value="+63" data-country-id="34">PH</option>
									<option value="+63" data-country-id="34">PH</option>
								</select>
								<input className="form-control w-75" type="number" placeholder="9*********" aria-label="Username" aria-describedby="basic-addon11" />
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
