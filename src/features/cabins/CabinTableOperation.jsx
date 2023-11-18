import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

const CabinTableOperation = () => {
	return (
		<TableOperations>
			<Filter
				filterField="discount"
				options={[
					{
						value: "all",
						label: "All",
					},
					{
						value: "no-discount",
						label: "No discount",
					},
					{
						value: "with-discount",
						label: "With discount",
					},
				]}
			/>
			<SortBy
				options={[
					{
						value: "name-asc",
						label: "Sort By name (A-Z)",
					},
					{
						value: "name-desc",
						label: "Sort By name (Z-A)",
					},
					{
						value: "regularPrice-asc",
						label: "Sort By price (Low first)",
					},
					{
						value: "regularPrice-desc",
						label: "Sort By price (High first)",
					},
					{
						value: "maxCapacity-asc",
						label: "Sort By Capacity (Low Capacity)",
					},
					{
						value: "maxCapacity-desc",
						label: "Sort By Capacity (Max Capacity)",
					},
				]}
			/>
		</TableOperations>
	);
};

export default CabinTableOperation;
