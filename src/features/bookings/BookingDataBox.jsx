import { format, isToday } from "date-fns";

import {
	HiOutlineChatBubbleBottomCenterText,
	HiOutlineCheckCircle,
	HiOutlineCurrencyDollar,
	HiOutlineHomeModern,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";

import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";

// A purely presentational component
const BookingDataBox = ({ booking }) => {
	const {
		created_at,
		startDate,
		endDate,
		numNights,
		numGuests,
		cabinPrice,
		extrasPrice,
		totalPrice,
		hasBreakfast,
		observations,
		isPaid,
		guests: { fullName: guestName, email, country, countryFlag, nationalID },
		cabins: { name: cabinName },
	} = booking;

	return (
		<div className="bg-white dark:bg-[#18212f]  border border-solid border-gray-100 dark:border-gray-800 rounded-lg overflow-hidden">
			<header className="bg-indigo-500 py-8 px-16 text-[#e0e7ff] text-[1.8rem] font-medium flex items-center justify-between">
				<div className="first:flex first:items-center first:gap-[1.6rem] first:font-medium first:text-3xl">
					<HiOutlineHomeModern className="w-[3.2rem] h-[3.2rem]" />
					<p>
						{numNights} nights in Cabin{" "}
						<span className="font-sono text-[2rem] ml-1">{cabinName}</span>
					</p>
				</div>

				<p>
					{format(new Date(startDate), "EEE, MMM dd yyyy")} (
					{isToday(new Date(startDate))
						? "Today"
						: formatDistanceFromNow(startDate)}
					) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
				</p>
			</header>

			<section className="pt-[3.2rem] px-16 pb-[1.2rem]">
				<div className="flex items-center gap-[1.2rem] mb-[1.6rem] text-gray-500 dark:text-gray-400">
					{countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
					<p className="[&:first-of-type]:font-medium [&:first-of-type]:text-gray-700 dark:[&:first-of-type]:text-gray-200">
						{guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
					</p>
					<span>&bull;</span>
					<p className="[&:first-of-type]:font-medium [&:first-of-type]:text-gray-700 dark:[&:first-of-type]:text-gray-200">
						{email}
					</p>
					<span>&bull;</span>
					<p className="[&:first-of-type]:font-medium [&:first-of-type]:text-gray-700 dark:[&:first-of-type]:text-gray-200">
						National ID {nationalID}
					</p>
				</div>

				{observations && (
					<DataItem
						icon={<HiOutlineChatBubbleBottomCenterText />}
						label="Observations"
					>
						{observations}
					</DataItem>
				)}

				<DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
					{hasBreakfast ? "Yes" : "No"}
				</DataItem>

				<div
					className={`flex items-center justify-between py-[1.6rem] px-[3.2rem] rounded-lg mt-10 ${
						isPaid
							? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
							: "bg-yellow-100  text-yellow-700 dark:bg-yellow-800 dark:text-yellow-100"
					}`}
				>
					<DataItem
						icon={
							<HiOutlineCurrencyDollar className="w-[2.4rem] h-[2.4rem] text-current" />
						}
						label={`Total price`}
					>
						{formatCurrency(totalPrice)}

						{hasBreakfast &&
							` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
								extrasPrice
							)} breakfast)`}
					</DataItem>

					<p className="uppercase text-2xl font-medium">
						{isPaid ? "Paid" : "Will pay at property"}
					</p>
				</div>
			</section>
			<footer className="py-[1.6rem] px-16 text-[1.2rem] text-gray-500 text-right">
				<p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
			</footer>
		</div>
	);
};

export default BookingDataBox;
