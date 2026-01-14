import express from "express";
import db_connection from "../../server/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authenticateToken } from "../../middleware/auth.js";

const router = express.Router();