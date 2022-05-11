import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import OrderSummery from "./components/OrderSummery/OrderSummery";
import NoMatchUrl from "./components/NoMatchUrl/NoMatchUrl";
import Products from "./components/Products/Products";
import FeaturedProduct from "./components/FeaturedProduct/FeaturedProduct";
import NewProduct from "./components/NewProduct/NewProduct";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Admin from "./components/Admin/Admin";
import Profile from "./components/Profile/Profile";
import { AuthProvider } from "./components/Auth/Auth";
import Login from "./components/Login/Login";
// const aboutLazy = React.lazy(() => import("./components/About"));
import RequireAuth from "./components/RequireAuth/RequireAuth";
function App() {
	return (
		<AuthProvider>
			<div className="App">
				<Sidebar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route
						path="about"
						element={
							<React.Suspense fallback="Loading...">
								<aboutLazy />
							</React.Suspense>
						}
					></Route>
					<Route path="order-summery" element={<OrderSummery />}></Route>
					<Route path="products" element={<Products />}>
						<Route index element={<About />}></Route>
						<Route path="featured" element={<FeaturedProduct />}></Route>
						<Route path="new" element={<NewProduct />}></Route>
					</Route>
					<Route path="users" element={<Users />}>
						<Route path=":userId" element={<UserDetails />}></Route>
						<Route path="admin" element={<Admin />}></Route>
					</Route>
					<Route
						path="Profile"
						element={
							<RequireAuth>
								<Profile />
							</RequireAuth>
						}
					></Route>
					<Route path="Login" element={<Login />}></Route>
					<Route path="*" element={<NoMatchUrl />}></Route>
				</Routes>
			</div>
		</AuthProvider>
	);
}

export default App;
