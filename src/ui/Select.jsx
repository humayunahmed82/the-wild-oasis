const Select = ({ options, value, onChange, ...props }) => {
	return (
		<select
			className={`text-[1.4rem] py-[0.8rem] px-[1.2rem] border border-solid rounded-[5px] bg-white font-medium shadow-custom-1 ${
				props.type === "white" ? "border-gray-100" : "border-gray-300"
			}`}
			value={value}
			{...props}
			onChange={onChange}
		>
			{options.map((option) => (
				<option value={option.value} key={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default Select;
