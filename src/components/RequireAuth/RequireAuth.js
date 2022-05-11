import React from "react";
import { useAuth } from "../Auth/Auth";
import { Navigate, useLocation } from "react-router-dom";
// import login from "../Login/Login";
function RequireAuth({ children }) {
	const auth = useAuth();
	const loaction = useLocation();

	if (!auth.user) {
		return (
			<Navigate to="/login" state={{ path: loaction.pathname }}></Navigate>
		);
	}

	return children;
}

export default RequireAuth;
