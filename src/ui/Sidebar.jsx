import Logo from "./Logo";
import MainNav from "./MainNav";

const Sidebar = () => {
	return (
		<aside className="bg-white py-[3.2rem] px-[2.4rem] border-r border-solid border-r-gray-100 row-span-full flex flex-col gap-[3.2rem]">
			<Logo />
			<MainNav />
		</aside>
	);
};

export default Sidebar;
