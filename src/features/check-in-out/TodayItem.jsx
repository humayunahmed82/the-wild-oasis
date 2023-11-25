import { Link } from "react-router-dom";

import CheckoutButton from "./CheckoutButton";

const TodayItem = ({ activity }) => {
	const { id, status, guests, numNights } = activity;

	return (
		<li className="grid grid-cols-[9rem_2rem_1fr_7rem_9rem] gap-5 items-center text-2xl py-3 border-b border-solid border-b-gray-100 dark:border-b-gray-800 first:border-t first:border-gray-100 dark:first:border-gray-800">
			{status === "unconfirmed" && (
				<div className="w-[fit-content] uppercase text-[1.1rem] font-semibold py-[0.4rem] px-[1.2rem] rounded-full bg-green-100 text-green-700">
					Arriving
				</div>
			)}
			{status === "checked-in" && (
				<div className="w-[fit-content] uppercase text-[1.1rem] font-semibold py-[0.4rem] px-[1.2rem] rounded-full green bg-indigo-100 text-indigo-700">
					Departing
				</div>
			)}
			<img
				className="max-w-[2rem] rounded-sm block border border-solid border-gray-100 dark:border-gray-800 "
				src={guests.countryFlag}
				alt={`Flag of ${guests.country}`}
			/>
			<div className="font-medium">{guests.fullName}</div>
			<div>{numNights} nights</div>
			{status === "unconfirmed" && (
				<Link
					to={`/checkin/${id}`}
					className="text-[1.2rem] py-1 px-2 uppercase font-semibold text-center rounded-lg whitespace-nowrap text-indigo-50 bg-indigo-600 hover:bg-indigo-700 focus:outline-0 focus:outline-offset-0"
				>
					Check in
				</Link>
			)}
			{status === "checked-in" && <CheckoutButton bookingId={id} />}
		</li>
	);
};

export default TodayItem;
