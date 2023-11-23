import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useOutsideClick from "../hooks/useOutsideClick";

const ModalContext = createContext();

const Modal = ({ children }) => {
	const [openName, setOpenName] = useState("");

	const close = () => setOpenName("");
	const open = setOpenName;

	return (
		<ModalContext.Provider value={{ openName, close, open }}>
			{children}
		</ModalContext.Provider>
	);
};

const Open = ({ children, opens: opensWindowName }) => {
	const { open } = useContext(ModalContext);

	return cloneElement(children, { onClick: () => open(opensWindowName) });
};

const Window = ({ children, name }) => {
	const { openName, close } = useContext(ModalContext);

	const ref = useOutsideClick(close);

	if (name !== openName) return null;

	return createPortal(
		<div className="fixed top-0 left-0 w-full h-[100vh] bg-white/10 dark:bg-[#18212f]/10 backdrop-blur-sm z-50 transition-all duration-500">
			<div
				className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#18212f] rounded-lg shadow-custom-3 py-[3.2rem] px-[4rem] transition-all duration-500"
				ref={ref}
			>
				<button
					className="p-[0.4rem] rounded-[5px] translate-x-[0.8rem] transition-all duration-200 absolute top-[1.2rem] right-[1.9rem] hover:bg-gray-100 dark:bg-gray-800 focus:outline-[0] focus:outline-offset-0"
					onClick={close}
				>
					<HiXMark className="w-[2.4rem] h-[2.4rem] text-gray-500 dark:text-gray-400" />
				</button>

				<div>{cloneElement(children, { onCloseModal: close })}</div>
			</div>
		</div>,
		document.body
	);
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
