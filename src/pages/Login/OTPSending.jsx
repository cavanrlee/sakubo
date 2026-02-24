import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { loginUser } from "@/pages/login/LoginController";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button"; 
import Logo from "@/components/Logo";
import Alert from "@/utils/alert";



export default function SaKuboLogin() {;

	return (
		<div class="row mt-5">
			<div class="col-12">
				<div class="card border-none!">
					<div class="card-body">
						<div class="row">
						<div class="col-12 text-center my-1">
							<span class="text-xl font-semibold text-black!">Forgot Your Password?</span>
						</div>

						<div class="col-12 text-center my-1">
							<span class="text-sm">Enter your phone number to receive a verification code.</span>
						</div>
						</div>

						<div class="row mt-2">
						<div class="col-12 text-center my-1">
							<div class="input-group" name="mobile-number-input-group">
								<select class="form-select w-25" name="country-calling-code" id="country-calling-code">
									<option value="+63" data-country-id="34">PH</option>
									<option value="+63" data-country-id="34">PH</option>
									<option value="+63" data-country-id="34">PH</option>
									<option value="+63" data-country-id="34">PH</option>
								</select>
								<input class="form-control w-75" type="number" placeholder="9*********" aria-label="Username" aria-describedby="basic-addon11" />
							</div>
						</div>

						<div class="col-12 mt-2">
							<div class="row px-3">
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
