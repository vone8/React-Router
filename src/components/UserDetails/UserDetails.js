import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
	const userparam = useParams();
	const userId = userparam.userId;
	return <div>Details about user: {userId} </div>;
}

export default UserDetails;
