import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";

import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";

const DashboardLayout = () => {
	const { isLoading: isLoading1, bookings } = useRecentBookings();
	const {
		isLoading: isLoading2,
		stays,
		confirmedStays,
		numDays,
	} = useRecentStays();
	const { cabins, isLoading: isLoading3 } = useCabins();

	if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

	return (
		<div className="grid grid-cols-4 grid-rows-[auto_34rem_auto] gap-10">
			<Stats
				bookings={bookings}
				confirmedStays={confirmedStays}
				numDays={numDays}
				cabinCount={cabins.length}
			/>
			<div className="">Today's activity</div>
			<div className="">Chart stay durations</div>
			<div className="">Chart sales</div>
		</div>
	);
};

export default DashboardLayout;
