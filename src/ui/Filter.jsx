import { useSearchParams } from "react-router-dom";

const Filter = ({ filterField, options }) => {
	const [searchParams, serSearchParams] = useSearchParams();
	const currentValue = searchParams.get(filterField) || options.at(0).value;

	const handelClick = (value) => {
		searchParams.set(filterField, value);
		if (searchParams.get("page")) searchParams.set("page", 1);

		serSearchParams(searchParams);
	};

	return (
		<div className="border border-solid border-gray-100 bg-white shadow-custom-1 rounded-[5px] flex gap-[0.4rem] p-[0.4rem]">
			{options.map((option) => (
				<button
					className={` rounded-[5px] font-medium text-[1.4rem] py-[0.44rem] px-[0.8rem] hover:bg-indigo-600 hover:text-indigo-50 ${
						option.value === currentValue
							? "bg-indigo-600 text-indigo-50"
							: "bg-white"
					}`}
					key={option.value}
					onClick={() => handelClick(option.value)}
					disabled={option.value === currentValue}
				>
					{option.label}
				</button>
			))}
		</div>
	);
};

export default Filter;

// 3. Client-Side Sorting Sorting Cabins.mp4
