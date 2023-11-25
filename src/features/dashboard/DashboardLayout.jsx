import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";

import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";

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
			<DurationChart confirmedStays={confirmedStays} />
			<SalesChart bookings={bookings} numDays={numDays} />
		</div>
	);
};

export default DashboardLayout;
