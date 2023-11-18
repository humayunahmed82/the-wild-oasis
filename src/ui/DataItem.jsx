const DataItem = ({ icon, label, children }) => {
	return (
		<div className="flex items-center gap-[1.6rem] py-[0.8rem]">
			<p className="flex items-center gap-[0.8rem] font-medium">
				<span className="w-8 h-8 text-indigo-600">{icon}</span>
				<span className="block">{label}</span>
			</p>
			{children}
		</div>
	);
};

export default DataItem;
