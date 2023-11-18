import { useEffect, useRef } from "react";

const useOutsideClick = (handel, listenCapturing = true) => {
	const ref = useRef();

	useEffect(() => {
		const handelClick = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				handel();
			}
		};

		document.addEventListener("click", handelClick, listenCapturing);

		return () =>
			document.removeEventListener("click", handelClick, listenCapturing);
	}, [handel, listenCapturing]);

	return ref;
};

export default useOutsideClick;
