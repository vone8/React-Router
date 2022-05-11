import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Auth/Auth";

function Login() {
	const [user, setUser] = useState("");
	const auth = useAuth();
	const navigate = useNavigate();
	const loaction = useLocation();
	const redirectPath = loaction.state?.path || "/";
	const handleLogin = () => {
		auth.login(user);
		navigate(redirectPath, { replace: true });
	};

	return (
		<div>
			<label>
				User Name: {""}
				<input type="text" onChange={(e) => setUser(e.target.value)} />
			</label>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
}

export default Login;
