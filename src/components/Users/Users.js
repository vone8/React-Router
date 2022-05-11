import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

function Users() {
	const [searchParams, setSearchParams] = useSearchParams();
	const showActiveUsers = searchParams.get("filter") === "active";
	return (
		<div>
			<ul>
				<li>User 1</li>
				<li>User 2</li>
				<li>User 3</li>
				<button onClick={() => setSearchParams({ filter: "active" })}>
					Active Users
				</button>
				<button onClick={() => setSearchParams({})}>Reset Filters</button>
				<Outlet />
			</ul>
			{showActiveUsers ? (
				<h2>Showing Active Users</h2>
			) : (
				<h2>Showing All Users</h2>
			)}
		</div>
	);
}

export default Users;
