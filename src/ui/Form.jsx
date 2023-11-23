const Form = ({ onSubmit, type, children }) => {
	return (
		<form
			onSubmit={onSubmit}
			className={`${
				type === "regular"
					? "py-[2.4rem] px-[4rem] bg-white  rounded-lg"
					: "w-[80rem]"
			} overflow-hidden text-[1.4rem]`}
		>
			{children}
		</form>
	);
};

export default Form;
