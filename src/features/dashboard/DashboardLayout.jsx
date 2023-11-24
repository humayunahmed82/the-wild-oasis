import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";

import Spinner from "../../ui/Spinner";

const DashboardLayout = () => {
	const { isLoading: isLoading1, bookings } = useRecentBookings();
	const { isLoading: isLoading2, stays, confirmedStays } = useRecentStays();

	if (isLoading1 || isLoading2) return <Spinner />;

	return (
		<div className="grid grid-cols-4 grid-rows-[auto_34rem_auto] gap-10">
			<div className="">Statistics</div>
			<div className="">Today's activity</div>
			<div className="">Chart stay durations</div>
			<div className="">Chart sales</div>
		</div>
	);
};

export default DashboardLayout;
