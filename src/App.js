import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import OrderSummery from "./components/OrderSummery/OrderSummery";
import NoMatchUrl from "./components/NoMatchUrl/NoMatchUrl";
function App() {
	return (
		<div className="App">
			<Sidebar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="about" element={<About />}></Route>
				<Route path="order-summery" element={<OrderSummery />}></Route>
				<Route path="*" element={<NoMatchUrl />}></Route>
			</Routes>
		</div>
	);
}

export default App;
