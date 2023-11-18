import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
	return (
		<div className="grid grid-cols-[26rem_1fr] grid-rows-[auto_1fr] h-[100vh]">
			<Header />
			<Sidebar />
			<main className="bg-gray-50 pt-16 pb-[4.4rem] px-[4.8rem] overflow-y-auto">
				<div className="max-[150rem] mx-auto flex flex-col gap-[3.2rem]">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default AppLayout;
