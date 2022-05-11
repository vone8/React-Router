import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
	return (
		<div>
			<div>
				<input type="search" name="search" placeholder="search" />
			</div>
			<nav>
				<Link to="featured">Featured</Link>
				<Link to="new">New</Link>
			</nav>
			<Outlet />
		</div>
	);
}

export default Products;
