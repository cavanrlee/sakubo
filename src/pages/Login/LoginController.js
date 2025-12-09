import express from "express";
import db_connection from "../../server/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authenticateToken } from "../../middleware/auth.js";

const router = express.Router();

router.post("/login", async (req, res) => {
	try {
		const { username, password } = req.body;

		if (!username || !password) {
			return res.status(400).json({ error: "Username and password are required" });
		}

		const query = "SELECT * FROM login WHERE username = $1 LIMIT 1";
		const { rows } = await db_connection.query(query, [username]);

		if (rows.length === 0) {
			return res.status(401).json({ error: "Invalid username or password" });
		}

		const user = rows[0];

		// Compare password with hashed password in DB
		const isValid = await bcrypt.compare(password, user.password);

		console.log(isValid);

		if (!isValid) {
			return res.status(401).json({ error: "Invalid username or passwordss" });
		}

		// Generate JWT token
		const token = jwt.sign(
			{
				userid: user.userid,
				username: user.username,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "30s" }
		);

		res.json({
			message: "Login successful",
			token,
			user: {
				userid: user.userid,
				username: user.username,
				email: user.email
			}
		});
	} catch (err) {
		console.error("Login error:", err);
		res.status(500).json({ error: "Server error" });
	}
});

export default router;
