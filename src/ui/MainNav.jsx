import { NavLink } from "react-router-dom";
import {
	HiMiniCalendarDays,
	HiOutlineCog6Tooth,
	HiOutlineHome,
	HiOutlineHomeModern,
	HiOutlineUsers,
} from "react-icons/hi2";

const MainNav = () => {
	return (
		<nav>
			<ul className="flex flex-col gap-4 main-nav">
				<li>
					<NavLink
						to="/dashboard"
						className="flex items-center gap-5 text-gray-600 text-[1.6rem] font-medium py-5 px-10 transition-all duration-300 hover:text-gray-800 hover:bg-gray-50 hover:rounded-[5px] group/menu"
					>
						<HiOutlineHome className="w-[2.4rem] h-[2.4rem] text-gray-400 transition-all duration-300 group-hover/menu:text-indigo-600" />
						<span>Dashboard</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/bookings"
						className="flex items-center gap-5 text-gray-600 text-[1.6rem] font-medium py-5 px-10 transition-all duration-300 hover:text-gray-800 hover:bg-gray-50 hover:rounded-[5px] group/menu"
					>
						<HiMiniCalendarDays className="w-[2.4rem] h-[2.4rem] text-gray-400 transition-all duration-300 group-hover/menu:text-indigo-600" />
						<span>Bookings</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/cabins"
						className="flex items-center gap-5 text-gray-600 text-[1.6rem] font-medium py-5 px-10 transition-all duration-300 hover:text-gray-800 hover:bg-gray-50 hover:rounded-[5px] group/menu"
					>
						<HiOutlineHomeModern className="w-[2.4rem] h-[2.4rem] text-gray-400 transition-all duration-300 group-hover/menu:text-indigo-600" />
						<span>Cabins</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/users"
						className="flex items-center gap-5 text-gray-600 text-[1.6rem] font-medium py-5 px-10 transition-all duration-300 hover:text-gray-800 hover:bg-gray-50 hover:rounded-[5px] group/menu"
					>
						<HiOutlineUsers className="w-[2.4rem] h-[2.4rem] text-gray-400 transition-all duration-300 group-hover/menu:text-indigo-600" />
						<span>Users</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/settings"
						className="flex items-center gap-5 text-gray-600 text-[1.6rem] font-medium py-5 px-10 transition-all duration-300 hover:text-gray-800 hover:bg-gray-50 hover:rounded-[5px] group/menu"
					>
						<HiOutlineCog6Tooth className="w-[2.4rem] h-[2.4rem] text-gray-400 transition-all duration-300 group-hover/menu:text-indigo-600 " />
						<span>Settings</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default MainNav;
