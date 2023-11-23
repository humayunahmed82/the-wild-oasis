import { NavLink } from "react-router-dom";
import {
	HiMiniCalendarDays,
	HiOutlineCog6Tooth,
	HiOutlineHome,
	HiOutlineHomeModern,
	HiOutlineUsers,
} from "react-icons/hi2";

const navLinkStyle =
	"flex items-center gap-5 text-gray-600  dark:text-gray-300 text-[1.6rem] font-medium py-5 px-10 transition-all duration-300 hover:text-gray-800 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900 hover:rounded-[5px] group/menu";

const navIconStyle =
	"w-[2.4rem] h-[2.4rem] text-gray-400 transition-all duration-300 group-hover/menu:text-indigo-600";

const MainNav = () => {
	return (
		<nav>
			<ul className="flex flex-col gap-4 main-nav">
				<li>
					<NavLink to="/dashboard" className={navLinkStyle}>
						<HiOutlineHome className={navIconStyle} />
						<span>Dashboard</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/bookings" className={navLinkStyle}>
						<HiMiniCalendarDays className={navIconStyle} />
						<span>Bookings</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/cabins" className={navLinkStyle}>
						<HiOutlineHomeModern className={navIconStyle} />
						<span>Cabins</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/users" className={navLinkStyle}>
						<HiOutlineUsers className={navIconStyle} />
						<span>Users</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/settings" className={navLinkStyle}>
						<HiOutlineCog6Tooth className={navIconStyle} />
						<span>Settings</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default MainNav;
