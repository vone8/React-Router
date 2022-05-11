import React from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../Login/Login";
import { useAuth } from "../Auth/Auth";
function Sidebar() {
	const navLinkStyle = ({ isActive }) => {
		return {
			textDecoration: isActive ? "none" : "underline",
			color: isActive ? "darkred" : "#000",
		};
	};

	const auth = useAuth();

	return (
		<nav>
			<div>
				<Link to="/">Home</Link>
				<Link to="/about">About Us</Link>
				<NavLink style={navLinkStyle} to="/">
					Home Using NavLink
				</NavLink>
				<NavLink style={navLinkStyle} to="/about">
					About Using NavLink
				</NavLink>
				<NavLink to="/products">Products</NavLink>
				<NavLink to="users">Users</NavLink>
				<NavLink to="users/admin">Admin</NavLink>
				<NavLink to="/profile">Profile</NavLink>
				{!auth.user && <NavLink to="/Login">Login</NavLink>}
			</div>
		</nav>
	);
}

export default Sidebar;
