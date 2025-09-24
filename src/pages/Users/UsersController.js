import express from "express";
import db_connection from "../../servces/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const { rows } = await db_connection.query("SELECT * FROM login");
		res.json(rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Database error" });
	}
});

router.post("/", async (req, res) => {
	try {
		const { username, password, email, mobile_no, first_name, middle_name, last_name } = req.body;

		if (!username || !password) {
			return res.status(400).json({ error: "Username and password are required" });
		}

		const insertQuery = `
			INSERT INTO login (username, password, email, mobileno, firstname, middlename, lastname)
			VALUES ($1, $2, $3, $4, $5, $6, $7)
			RETURNING *;
		`;

		const { rows } = await db_connection.query(insertQuery, [username, password, email, mobile_no, first_name, middle_name, last_name]);

		res.status(201).json({ message: "User added successfully", user: rows[0] });
	} catch (err) {
		console.error("Error inserting user:", err);
		res.status(500).json({ error: "Database error" });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const result = await db_connection.query("DELETE FROM login WHERE userid = $1", [id]);

		if (result.rowCount === 0) {
			return res.status(404).json({ error: "User not found." });
		}

		res.json({ message: "User deleted successfully", deletedUser: result.rows[0] });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Database error!" });
	}
});

router.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { n_username, n_password } = req.body;


		const result = await db_connection.query(
			"UPDATE login SET username = $1, password = $2 WHERE userid = $3",
			[n_username, n_password, id]);

		console.log(result);

		if (result.rowCount === 0) {
			return res.status(404).json({ error: "User not found." });
		}

		res.json({ message: "User deleted successfully", updatedUser: result.rows[0] });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Database error!" });
	}
});


export default router;