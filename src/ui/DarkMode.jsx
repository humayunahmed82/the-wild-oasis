import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

const DarkMode = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<button
			className="bg-transparent border-0 p-[0.6rem] rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-0 focus:outline-offset-0"
			onClick={toggleDarkMode}
		>
			{isDarkMode ? (
				<HiOutlineSun className="w-9 h-9 text-indigo-600 " />
			) : (
				<HiOutlineMoon className="w-9 h-9 text-indigo-600" />
			)}
		</button>
	);
};

export default DarkMode;
