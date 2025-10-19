import express from "express";
import db_connection from "../../server/db.js";

const router = express.Router();

// GET ALL USERS
router.get("/", async (req, res) => {
	try {
		const { rows } = await db_connection.query("SELECT * FROM login ORDER BY userid ASC");
		res.json(rows);
	} catch (err) {
		console.error("Error fetching users:", err);
		res.status(500).json({ error: "Database error" });
	}
});

// ADD NEW USER
router.post("/", async (req, res) => {
	try {
		const {
			username,
			password,
			email,
			mobile_no,
			first_name,
			middle_name,
			last_name,
		} = req.body;

		if (!username || !password) {
			return res.status(400).json({ error: "Username and password are required" });
		}

		const insertQuery = `
			INSERT INTO login (username, password, email, mobileno, firstname, middlename, lastname)
			VALUES ($1, $2, $3, $4, $5, $6, $7)
			RETURNING *;
		`;

		const { rows } = await db_connection.query(insertQuery, [
			username,
			password,
			email,
			mobile_no,
			first_name,
			middle_name,
			last_name,
		]);

		res.status(201).json({
			message: "User added successfully",
			user: rows[0],
		});
	} catch (err) {
		console.error("Error inserting user:", err);
		res.status(500).json({ error: "Database error" });
	}
});

// DELETE USER
router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const { rows, rowCount } = await db_connection.query(
			"DELETE FROM login WHERE userid = $1 RETURNING *",
			[id]
		);

		if (rowCount === 0) {
			return res.status(404).json({ error: "User not found" });
		}

		res.json({
			message: "User deleted successfully",
			deletedUser: rows[0],
		});
	} catch (err) {
		console.error("Error deleting user:", err);
		res.status(500).json({ error: "Database error" });
	}
});

// UPDATE USER
router.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { username, password } = req.body;

		if (!username || !password) {
			return res.status(400).json({ error: "Username and password are required" });
		}

		const { rows, rowCount } = await db_connection.query(
			"UPDATE login SET username = $1, password = $2 WHERE userid = $3 RETURNING *",
			[username, password, id]
		);

		if (rowCount === 0) {
			return res.status(404).json({ error: "User not found" });
		}

		res.json({
			message: "User updated successfully",
			updatedUser: rows[0],
		});
	} catch (err) {
		console.error("Error updating user:", err);
		res.status(500).json({ error: "Database error" });
	}
});

export default router;
