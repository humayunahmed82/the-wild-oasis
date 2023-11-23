import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const Sidebar = () => {
	return (
		<aside className="bg-white dark:bg-[#18212f] py-[3.2rem] px-[2.4rem] border-r border-solid border-r-gray-100 dark:border-r-gray-800 row-span-full flex flex-col gap-[3.2rem]">
			<Logo />
			<MainNav />

			<Uploader />
		</aside>
	);
};

export default Sidebar;
