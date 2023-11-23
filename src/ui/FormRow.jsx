const FormRow = ({ label, children, error }) => {
	return (
		<div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-[2.4rem] py-[1.2rem] first:pt-0 last:pb-0 border-b border-solid border-b-gray-100 dark:border-gray-800 last:border-b-0 [&:has(button)]:flex [&:has(button)]:justify-end [&:has(button)]:gap-[1.2rem]">
			{label && (
				<label className="font-medium" htmlFor={children.props.id}>
					{label}
				</label>
			)}
			{children}
			{error && <span className="text-[1.4rem] text-red-700">{error}</span>}
		</div>
	);
};

export default FormRow;
