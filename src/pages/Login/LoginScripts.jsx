import { useState, useEffect } from "react";
import SaKuboLogin from "./Login";

function UserScripts() {
	const [users, setUsers] = useState([]);
	// const [usersDeets, setUsersDeet] = useState([]);

	useEffect(() => {
		const loadUsers = async () => {
			try {
				const res = await fetch("/users");
				if (!res.ok) throw new Error("Network error");

				const data = await res.json();

				setUsers(data);
				// setUsersDeet(data);
			} catch (err) {
				console.error("Failed to fetch users:", err);
			}
		};

		loadUsers();
	}, []);

	return <SaKuboLogin user_data={users} />;
}

export default UserScripts;