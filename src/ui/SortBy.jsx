import { useSearchParams } from "react-router-dom";
import Select from "./Select";

const SortBy = ({ options }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const SortBy = searchParams.get("sortBy") || "";

	const handelClick = (e) => {
		searchParams.set("sortBy", e.target.value);
		setSearchParams(searchParams);
	};

	return (
		<Select
			options={options}
			value={SortBy}
			type="white"
			onChange={handelClick}
		/>
	);
};

export default SortBy;
