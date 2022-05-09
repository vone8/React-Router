import React from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
	const navLinkStyle = ({ isActive }) => {
		return {
			textDecoration: isActive ? "none" : "underline",
			color: isActive ? "darkred" : "#000",
		};
	};
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
			</div>
		</nav>
	);
}

export default Sidebar;
