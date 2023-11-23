import { HiOutlineUser } from "react-icons/hi2";

import Logout from "../features/authentication/Logout";
import DarkMode from "./DarkMode";

import { useNavigate } from "react-router-dom";

const HeaderMenu = () => {
	const navigate = useNavigate();

	return (
		<ul className="flex gap-2">
			<li>
				<button
					onClick={() => navigate("/account")}
					className="bg-transparent border-0 p-[0.6rem] rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-0 focus:outline-offset-0"
				>
					<HiOutlineUser className="w-9 h-9 text-indigo-600" />
				</button>
			</li>
			<li>
				<DarkMode />
			</li>
			<li>
				<Logout />
			</li>
		</ul>
	);
};

export default HeaderMenu;
