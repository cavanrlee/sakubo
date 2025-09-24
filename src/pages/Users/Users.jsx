import { useState } from "react";
import { useEffect } from "react";

function Users({ andong }) {
	const [append_table, set_value] = useState(false);
	const [append_table_del] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [mobile_no, setMobileNo] = useState("");
	const [first_name, setFirstName] = useState("");
	const [middle_name, setMiddleName] = useState("");
	const [last_name, setLastName] = useState("");

	const [editedUsers, setEditedUsers] = useState([]);
	const [new_username, updateUsername] = useState("");
	const [new_password, updatePassword] = useState("");

	let user_details = null;

	if (andong.length > 0) {
		user_details =
			<table className="table table-bordered table-hover mb-0">
				<thead>
					<tr>
						<th className="text-sm text-black whitespace-nowrap p-1">Username</th>
						<th className="text-sm text-black whitespace-nowrap p-1">Password</th>
					</tr>
				</thead>
				<tbody>
					{andong.map((user) => (
						<tr>
							<td>{user.username}</td>
							<td>{user.password}</td>
						</tr>
					))}
				</tbody>
			</table>
	}

	const handleInsert = async (e) => {
		e.preventDefault();

		try {
			const res = await fetch("/users", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password, email, mobile_no, first_name, middle_name, last_name }),
			});

			if (!res.ok) throw new Error("Failed to insert user");
			const data = await res.json();

			console.log("Inserted user:", data.user);

			setUsername("");
			setPassword("");
			setEmail("");
			setMobileNo("");
			setFirstName("");
			setMiddleName("");
			setLastName("");

			window.location.reload();
		} catch (err) {
			console.error("Insert error:", err);
		}
	};

	const handleDelete = async (id) => {
		try {
			const res = await fetch(`/users/${id}`, {
				method: "DELETE",
			});

			if (!res.ok) throw new Error("Failed to delete user.");

			const result = await res.json();
			console.log("Deleted:", result);

			window.location.reload();
		} catch (err) {
			console.error(err);
		}
	}

	let user_details_delete = null;

	if (andong.length > 0) {
		user_details_delete =
			<table className="table table-bordered table-hover mb-0">
				<thead>
					<tr>
						<th className="text-sm text-black whitespace-nowrap p-1">Username</th>
						<th className="text-sm text-black whitespace-nowrap p-1">Password</th>
						<th className="text-sm text-black whitespace-nowrap p-1">Action</th>
					</tr>
				</thead>
				<tbody>
					{andong.map((user) => (
						<tr key={user.userid}>
							<td>
								{user.username}
							</td>
							<td>
								{user.password}
							</td>
							<td>
								<button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.userid)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
	}

	useEffect(() => {
		setEditedUsers(andong);
	}, [andong]);

	const handleChange = (id, field, value) => {
		setEditedUsers((prev) =>
			prev.map((user) =>
				user.userid === id ? { ...user, [field]: value } : user
			)
		);
	};

	const handleUpdate = async (id) => {
		const user = editedUsers.find((u) => u.userid === id);

		try {
			const res = await fetch(`/users/${id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ n_username: user.username, n_password: user.password, id: id }),
			});

			if (!res.ok) throw new Error("Failed to insert user");

			const data = await res.json();
			console.log("Update user:", data.user);

			// updateUsername("");
			// updatePassword("");

			window.location.reload();
		} catch (err) {
			console.error("Update error:", err);
		}
	}

	let user_details_update = null;

	if (editedUsers.length > 0) {
		user_details_update =
			<table className="table table-bordered table-hover mb-0">
				<thead>
					<tr>
						<th className="text-sm text-black whitespace-nowrap p-1">Username</th>
						<th className="text-sm text-black whitespace-nowrap p-1">Password</th>
						<th className="text-sm text-black whitespace-nowrap p-1">Action</th>
					</tr>
				</thead>
				<tbody>
					{editedUsers.map((user) => (
						<tr key={user.userid}>
							<td>
								{/* <input className="form-control" type="text" onChange={(e) => handleChange(e.target.value)} value={user.username} required /> */}
								<input className="form-control" type="text" onChange={(e) => handleChange(user.userid, "username", e.target.value)} value={user.username} required />
							</td>
							<td>
								{/* <input className="form-control" type="text" onChange={(e) => handleChange(e.target.value)} value={user.password} required /> */}
								<input className="form-control" type="text" onChange={(e) => handleChange(user.userid, "password", e.target.value)} value={user.password} required />
							</td>
							<td>
								<button className="btn btn-primary btn-sm" onClick={() => handleUpdate(user.userid)}>Update</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
	}

	return (
		<>
			<div className="col-12">
				<div className="card border-0 p-0">
					<div className="row">
						<div className="col-12" id='container-test'>
							<span className="text-md !text-gray-600">
								Click the button to fetch data from the database.
							</span>
						</div>

					</div>
				</div>

				<div className="card border-0 p-2">
					<div className="row">
						<div className="col-12">
							<button className='btn btn-primary text-white !font-semibold h-13' type="button" onClick={() => set_value(true)}>
								Generate
							</button>
						</div>
					</div>
				</div>

				<div className="card border-2 p-2">
					<div className="row">
						<div className="col-12">
							{append_table && user_details}
						</div>
					</div>
				</div>
			</div >

			<div className="col-12 mt-4">
				<div className="card border-0 p-0">
					<div className="row">
						<div className="col-12" id='container-test'>
							<span className="text-md !text-gray-600">
								Insert new user to the user table.
							</span>
						</div>

					</div>
				</div>

				<form onSubmit={handleInsert}>
					<div className="card border-2 p-2">
						<div className="row">
							<div className="col-12">
								<div className="col-12 text-left">
									<label className="my-1" htmlFor="">
										<span className="text-md font-bold !text-gray-600">
											Username:
										</span>
									</label>

									<input className="form-control" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
								</div>

								<div className="col-12 text-left">
									<label className="my-1" htmlFor="">
										<span className="text-md font-bold !text-gray-600">
											Password:
										</span>
									</label>

									<input className="form-control" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
								</div>

								<div className="col-12 text-left">
									<label className="my-1" htmlFor="">
										<span className="text-md font-bold !text-gray-600">
											Email:
										</span>
									</label>

									<input className="form-control" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
								</div>

								<div className="col-12 text-left">
									<label className="my-1" htmlFor="">
										<span className="text-md font-bold !text-gray-600">
											Mobile Number:
										</span>
									</label>

									<input className="form-control" type="number" placeholder="Mobile No." value={mobile_no} onChange={(e) => setMobileNo(e.target.value)} required />
								</div>

								<div className="col-12">
									<div className="row">
										<div className="col-4 text-left">
											<label className="my-1" htmlFor="">
												<span className="text-md font-bold !text-gray-600">
													First Name:
												</span>
											</label>

											<input className="form-control" type="text" placeholder="First name" value={first_name} onChange={(e) => setFirstName(e.target.value)} required />
										</div>

										<div className="col-4 text-left">
											<label className="my-1" htmlFor="">
												<span className="text-md font-bold !text-gray-600">
													Middle Name:
												</span>
											</label>

											<input className="form-control" type="text" placeholder="Middle name" value={middle_name} onChange={(e) => setMiddleName(e.target.value)} required />
										</div>

										<div className="col-4 text-left">
											<label className="my-1" htmlFor="">
												<span className="text-md font-bold !text-gray-600">
													Last Name:
												</span>
											</label>

											<input className="form-control" type="text" placeholder="Last name" value={last_name} onChange={(e) => setLastName(e.target.value)} required />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="card border-0 p-2">
						<div className="row">
							<div className="col-12">
								<button className='btn btn-primary text-white !font-semibold h-13' type="submit">
									Submit
								</button>
							</div>
						</div>
					</div>
				</form>
			</div >

			<div className="col-12">
				<div className="card border-0 p-0">
					<div className="row">
						<div className="col-12" id='container-test'>
							<span className="text-md !text-gray-600">
								Delete entry from the database.
							</span>
						</div>

					</div>
				</div>

				<div className="card border-2 p-2">
					<div className="row">
						<div className="col-12">
							{user_details_delete}
						</div>
					</div>
				</div>
			</div >

			<div className="col-12">
				<div className="card border-0 p-0">
					<div className="row">
						<div className="col-12" id='container-test'>
							<span className="text-md !text-gray-600">
								Update entry from the database.
							</span>
						</div>

					</div>
				</div>

				<div className="card border-2 p-2">
					<div className="row">
						<div className="col-12">
							{user_details_update}
						</div>
					</div>
				</div>
			</div >
		</>
	)
}

export default Users
