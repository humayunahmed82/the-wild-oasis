import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

const Logout = () => {
	const { logout, isLoading } = useLogout();

	return (
		<button
			onClick={logout}
			disabled={isLoading}
			className="bg-transparent border-0 p-[0.6rem] rounded-lg transition-all duration-200 hover:bg-gray-100 focus:outline-0 focus:outline-offset-0"
		>
			{!isLoading ? (
				<HiArrowRightOnRectangle className="w-9 h-9 text-indigo-600" />
			) : (
				<SpinnerMini />
			)}
		</button>
	);
};

export default Logout;
