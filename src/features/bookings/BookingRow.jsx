import { format, isToday } from "date-fns";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";

import Table from "../../ui/Table";

const BookingRow = ({
	booking: {
		id: bookingId,
		created_at,
		startDate,
		endDate,
		numNights,
		numGuests,
		totalPrice,
		status,
		guests: { fullName: guestName, email },
		cabins: { name: cabinName },
	},
}) => {
	const statusToTagName = {
		unconfirmed: "bg-indigo-100 text-indigo-700",
		"checked-in": "green bg-green-100 text-green-700",
		"checked-out": "bg-gray-200 text-gray-700",
	};

	return (
		<Table.Row>
			<div className="text-[1.6rem] text-gray-600 font-semibold font-sono">
				{cabinName}
			</div>

			<div className="flex flex-col gap-[0.2rem]">
				<span className="font-medium">{guestName}</span>
				<span className="text-gray-500 text-[1.2rem]">{email}</span>
			</div>

			<div className="flex flex-col gap-[0.2rem]">
				<span className="font-medium">
					{isToday(new Date(startDate))
						? "Today"
						: formatDistanceFromNow(startDate)}{" "}
					&rarr; {numNights} night stay
				</span>
				<span className="text-gray-500 text-[1.2rem]">
					{format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
					{format(new Date(endDate), "MMM dd yyyy")}
				</span>
			</div>

			<span
				className={`w-[fit-content] uppercase text-[1.1rem] font-semibold py-[0.4rem] px-[1.2rem] rounded-full ${statusToTagName[status]}`}
			>
				{status.replace("-", " ")}
			</span>

			<div className="font-medium font-sono">{formatCurrency(totalPrice)}</div>
		</Table.Row>
	);
};

export default BookingRow;
