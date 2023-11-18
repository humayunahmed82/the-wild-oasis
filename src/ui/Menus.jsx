import { useContext } from "react";
import { createContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import useOutsideClick from "../hooks/useOutsideClick";

const MenusContext = createContext();

const Menus = ({ children }) => {
	const [openId, setOpenId] = useState("");
	const [position, setPosition] = useState(null);

	const close = () => setOpenId("");
	const open = setOpenId;

	return (
		<MenusContext.Provider
			value={{ openId, close, open, position, setPosition }}
		>
			{children}
		</MenusContext.Provider>
	);
};

const Menu = ({ children }) => {
	return <div className="flex items-center justify-end">{children}</div>;
};

const Toggle = ({ id }) => {
	const { openId, close, open, setPosition } = useContext(MenusContext);

	const handelClick = (e) => {
		const rect = e.target.closest("button").getBoundingClientRect();
		setPosition({
			x: window.innerWidth - rect.width - rect.x,
			y: rect.y + rect.height + 8,
		});

		openId === "" || openId !== id ? open(id) : close();
	};

	return (
		<button
			className="p-[0.4rem] shadow-custom-1 translate-x-[0.8rem] transition-all duration-200 hover:bg-gray-100 focus:outline-[0] focus:outline-offset-0"
			onClick={handelClick}
		>
			<HiEllipsisVertical className="w-[2.4rem] h-[2.4rem] text-gray-700" />
		</button>
	);
};

const List = ({ id, children }) => {
	const { openId, position, close } = useContext(MenusContext);

	const ref = useOutsideClick(close);

	if (openId !== id) return null;

	return createPortal(
		<ul
			className="fixed bg-white shadow-custom-2 rounded-lg"
			style={{
				right: position.x,
				top: position.y,
			}}
			ref={ref}
		>
			{children}
		</ul>,
		document.body
	);
};

const Button = ({ icon, children, onClick }) => {
	const { close } = useContext(MenusContext);

	const handelClick = () => {
		onClick?.();
		close();
	};

	return (
		<li>
			<button
				className="w-full text-left py-[1.2rem] px-[2.4rem] text-[1.4rem] transition-all duration-200 flex items-center gap-[1.2rem] hover:bg-gray-50 focus:outline-[0] focus:outline-offset-0"
				onClick={handelClick}
			>
				<span className="w-[1.6rem] h-[1.6rem] text-gray-400 transition-all duration-300">
					{icon}
				</span>
				<span className="block">{children}</span>
			</button>
		</li>
	);
};

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
