import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useLocalStorageState(
		window.matchMedia("(prefers-color-scheme: dark)").matches,
		"isDarkMode"
	);

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
			document.documentElement.classList.remove("light");
		} else {
			document.documentElement.classList.add("light");
			document.documentElement.classList.remove("dark");
		}
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		setIsDarkMode((isDark) => !isDark);
	};

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

const useDarkMode = () => {
	const context = useContext(DarkModeContext);

	if (context === undefined)
		throw Error("DarkModeContext was used outside of DarkModeProvider");

	return context;
};

export { DarkModeProvider, useDarkMode };
