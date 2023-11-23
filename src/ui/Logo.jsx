import { useDarkMode } from "../context/DarkModeContext";

const Logo = () => {
	const { isDarkMode } = useDarkMode();

	const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

	return (
		<div className="text-center">
			<img className="h-[9.6rem] w-auto inline-block" src={src} alt="Logo" />
		</div>
	);
};

export default Logo;
