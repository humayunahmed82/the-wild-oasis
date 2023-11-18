const Checkbox = ({ checked, onChange, disabled = false, id, children }) => {
	return (
		<div className="flex gap-[1.6rem]">
			<input
				className="h-[2.4rem] w-[2.4rem] outline-offset-2 origin-[0] accent-indigo-600 disabled:accent-indigo-600"
				type="checkbox"
				id={id}
				checked={checked}
				onChange={onChange}
				disabled={disabled}
			/>
			<label
				className="flex-1 flex items-center gap-[0.8rem]"
				htmlFor={!disabled ? id : ""}
			>
				{children}
			</label>
		</div>
	);
};

export default Checkbox;
