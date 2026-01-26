import { useState, useEffect } from "react";
import SaKuboLogin from "./Logsin";

function UserScripts() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const loadUsers = async () => {
			try {
				const res = await fetch("http://sakubo-laravel-api.com/api/users", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"X-API-KEY": "sakubo-1234567890abcdef1234567890abcdef", // Only API key
					},
				});

				if (!res.ok) {
					throw new Error("Network error or invalid API key");
				}

				const json = await res.json();

				// Laravel returns { message, data }
				setUsers(json.data);
			} catch (err) {
				console.error("Failed to fetch users:", err);
			}
		};

		loadUsers();
	}, []);

	return <SaKuboLogin user_data={users} />;
}

export default UserScripts;
