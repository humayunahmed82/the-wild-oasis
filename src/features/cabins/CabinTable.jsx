import { useCabins } from "./useCabins";
import { useSearchParams } from "react-router-dom";

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

const CabinTable = () => {
	const { isLoading, cabins } = useCabins();

	const [searchParams] = useSearchParams();

	// 1. Filter
	const filterValue = searchParams.get("discount") || "all";

	let filteredCabins;
	if (filterValue === "all") filteredCabins = cabins;

	if (filterValue === "no-discount")
		filteredCabins = cabins.filter((cabin) => cabin.discount === 0);

	if (filterValue === "with-discount")
		filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

	// 2. Sort by
	const sortBy = searchParams.get("sortBy") || "startDate-asc";

	let sortedCabins;
	if (filteredCabins) {
		const [field, direction] = sortBy.split("-");
		const modifier = direction === "asc" ? 1 : -1;
		sortedCabins = [...filteredCabins].sort(
			(a, b) => (a[field] - b[field]) * modifier
		);
	} else sortedCabins = [];

	if (isLoading) return <Spinner />;

	if (!cabins.length) return <Empty resourceName="Cabins" />;

	return (
		<Menus>
			<Table columns="grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr]">
				<Table.Header>
					<div></div>
					<div>Cabin</div>
					<div>Capacity</div>
					<div>Price</div>
					<div>Discount</div>
					<div></div>
				</Table.Header>
				<Table.Body
					// data={cabins}
					// data={filteredCabins}
					data={sortedCabins}
					render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
				/>
			</Table>
		</Menus>
	);
};

export default CabinTable;

// 2. Client-Side Filtering Filtering Cabins
