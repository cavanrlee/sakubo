import pkg from "pg";
import dotenv from "dotenv";

// The .env file itself. Contains most of the configuration for the database connection establishment
// You can set multilple database credentials and call it in the database.php equivalent file that caters the connection credentials

dotenv.config();

const { Pool } = pkg;

const db_connection = new Pool({
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
	port: process.env.PGPORT,
});


export default db_connection;