import Stat from "./Stat";
import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

const Stats = ({ bookings, confirmedStays, numDays, cabinCount }) => {
	// 1.
	const numBookings = bookings.length;

	// 2.
	const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

	// 3.
	const checkIn = confirmedStays.length;

	// 4.

	const occupation =
		confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
		(numDays * cabinCount);

	return (
		<>
			<Stat
				title="Bookings"
				color="bg-sky-100"
				icon={
					<HiOutlineBriefcase className="w-[3.2rem] h-[3.2rem] text-sky-700" />
				}
				value={numBookings}
			/>
			<Stat
				title="Sales"
				color="bg-green-100"
				icon={
					<HiOutlineBanknotes className="w-[3.2rem] h-[3.2rem] text-green-700" />
				}
				value={formatCurrency(sales)}
			/>
			<Stat
				title="Check ins"
				color="bg-blue-100"
				icon={
					<HiOutlineCalendarDays className="w-[3.2rem] h-[3.2rem] text-indigo-700" />
				}
				value={checkIn}
			/>
			<Stat
				title="Occupancy rate"
				color="bg-yellow-100"
				icon={
					<HiOutlineChartBar className="w-[3.2rem] h-[3.2rem] text-yellow-700" />
				}
				value={Math.round(occupation * 100) + "%"}
			/>
		</>
	);
};

export default Stats;
