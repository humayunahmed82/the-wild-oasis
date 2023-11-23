import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperation from "../features/cabins/CabinTableOperation";

const Cabins = () => {
	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="text-5xl font-semibold">All cabins</h1>
				<CabinTableOperation />
			</div>
			<div className="flex flex-col gap-[1.6rem]">
				<CabinTable />

				<AddCabin />
			</div>
		</>
	);
};

export default Cabins;
