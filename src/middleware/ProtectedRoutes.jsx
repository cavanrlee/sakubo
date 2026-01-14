import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
	const token = localStorage.getItem("auth_token");
	const expiresAt = localStorage.getItem("expires_at");

	if (!token) {
		return <Navigate to="/login" replace />;
	}

	console.log(expiresAt);
	console.log(Date.now());

	if (expiresAt && Date.now() > expiresAt) {
		localStorage.removeItem("auth_token");
		localStorage.removeItem("expires_at");

		return <Navigate to="/login" replace />;
	}

	if (children) return children;

	return <Outlet />;
}