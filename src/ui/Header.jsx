import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
	return (
		<header className="bg-white dark:bg-[#18212f] py-5 px-[4.8rem] border-b border-solid border-b-gray-100 dark:border-b-gray-800 flex gap-10 justify-end">
			<UserAvatar />
			<HeaderMenu />
		</header>
	);
};

export default Header;
