import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SaKuboLogin({ user_data }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			const res = await fetch("/users/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			});

			const data = await res.json();

			if (!res.ok) {
				alert(data.error || "Login failed");
			} else {
				localStorage.setItem("auth_token", data.token);
				alert(`Login successful! Welcome, ${data.user.username}`);
				// optionally: redirect or fetch protected data.
				window.location.replace("/dashboard");
			}
		} catch (err) {
			console.error("Login error:", err);
			alert("Server error, try again later");
		}
	};

	return (
		<>
			<div className="col-12">
				<div className="card border-0 p-8">
					<div className="row">
						<div className="col-12">
							<span className="text-4xl text-[#4CAF50] font-bold">
								saKubo
							</span>
						</div>
					</div>
				</div>

				<div className="card border-0 p-0">
					<div className="row mb-2">
						<div className="col-12 my-2">
							<span className="text-2xl !text-gray-600 font-bold">
								Welcome back!
							</span>
						</div>

						<div className="col-12 my-2">
							<span className="text-md !text-gray-600">
								Sign in to your account.
							</span>
						</div>
					</div>

					<div className="row mt-4">
						<form onSubmit={handleLogin} id="login-form">
							<div className="col-12 text-left my-2">
								<label className="form-label text-sm">
									<span className="text-muted">
										Mobile Number/Username
									</span>
								</label>

								<input className="form-control h-13" id='input' type="text" placeholder="+639XX-XXX-XXXX" value={username} onChange={(e) => setUsername(e.target.value)} required />
							</div>

							<div className="col-12 text-left my-2">
								<label className="form-label text-sm">
									<span className="text-muted">
										Password
									</span>
								</label>
								<input className="form-control h-13" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
							</div>
						</form>
					</div>

					<div className="row mt-2">
						<div className="col-6 text-left">
							<input className='form-check-input me-2' type="checkbox" />

							<label className="form-label text-sm">
								<span className="text-muted">
									Remember me
								</span>
							</label>
						</div>

						<div className="col-6 text-right">
							<a href="#">
								<label className="form-label text-sm">
									<span className="text-gray-600 font-semibold hover:cursor-pointer hover:text-gray-900">
										Forgot password?
									</span>
								</label>
							</a>
						</div>
					</div>

					<div className="row mt-2">
						<div className="col-12 text-center my-2">
							<div className="row mx-1">
								<button className='btn btn-primary h-13' type="button" onClick={() => document.getElementById("login-form").requestSubmit()}>
									<span className='text-white font-bold'>
										Log In
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div >
		</>
	);
}