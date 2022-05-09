import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSummery() {
	const navigate = useNavigate();
	return (
		<div>
			<h2>Order Confirmed</h2>
			<button onClick={() => navigate(-1)}>Back</button>
		</div>
	);
}

export default OrderSummery;
