const Stat = ({ icon, title, value, color }) => {
	return (
		<div className="bg-white dark:bg-[#18212f] border border-solid border-gray-100 dark:border-gray-800 rounded-lg p-6 grid grid-cols-[6.4rem_1fr] grid-rows-[auto_auto] gap-x-6 gap-y-2">
			<div
				className={`row-span-full aspect-square rounded-full flex items-center justify-center ${color} `}
			>
				{icon}
			</div>
			<h5 className="self-end text-[1.2rem] uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
				{title}
			</h5>
			<p className="text-[2.4rem] leading-none font-medium">{value}</p>
		</div>
	);
};

export default Stat;
