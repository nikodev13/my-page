import NavBar from "../components/layout/NavBar.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<div className={`flex lg:flex-row flex-col min-h-screen bg-gray-900`}>
			<NavBar />
			<main className={`flex-1 xl:mx-10 m-5`}>
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;