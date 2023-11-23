import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
	return (
		<header className="bg-white py-5 px-[4.8rem] border-b border-solid border-b-gray-100 flex gap-10 justify-end">
			<UserAvatar />
			<HeaderMenu />
		</header>
	);
};

export default Header;
