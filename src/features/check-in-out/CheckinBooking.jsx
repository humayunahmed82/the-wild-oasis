import { useEffect, useState } from "react";

import { formatCurrency } from "../../utils/helpers";
import { useMoveBack } from "../../hooks/useMoveBack";

import Spinner from "../../ui/Spinner";
import BookingDataBox from "../../features/bookings/BookingDataBox";
import Checkbox from "../../ui/Checkbox";

import { useBooking } from "../bookings/useBooking";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";

const CheckinBooking = () => {
	const [confirmPaid, setConfirmPaid] = useState(false);
	const [addBreakfast, setAddBreakfast] = useState(false);

	const { isLoading, booking } = useBooking();

	const { isLoading: isLoadingSetting, settings } = useSettings();

	useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

	const moveBack = useMoveBack();

	const { checkin, isCheckingIn } = useCheckin();

	if (isLoading || isLoadingSetting) return <Spinner />;

	const {
		id: bookingId,
		guests,
		totalPrice,
		numGuests,
		hasBreakfast,
		numNights,
	} = booking;

	const optionalBreakfast = settings.breakfastPrice * numNights * numGuests;

	const handleCheckin = () => {
		if (!confirmPaid) return;

		if (addBreakfast) {
			checkin({
				bookingId,
				breakfast: {
					hasBreakfast: true,
					extrasPrice: optionalBreakfast,
					totalPrice: totalPrice + optionalBreakfast,
				},
			});
		} else {
			checkin({ bookingId, breakfast: {} });
		}
	};

	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="font-semibold text-5xl">
					Check in booking #{bookingId}
				</h1>
				<button
					className="text-indigo-600 font-medium text-center transition-all duration-300 rounded-lg hover:text-indigo-700 active:text-indigo-700"
					onClick={moveBack}
				>
					&larr; Back
				</button>
			</div>

			<BookingDataBox booking={booking} />

			{!hasBreakfast && (
				<div className="bg-white border border-solid border-gray-100 rounded-lg py-10 px-16">
					<Checkbox
						checked={addBreakfast}
						onChange={() => {
							setAddBreakfast((add) => !add);
							setConfirmPaid(false);
						}}
						id="breakfast"
					>
						Want to add breakfast to {formatCurrency(optionalBreakfast)}?
					</Checkbox>
				</div>
			)}

			<div className="bg-white border border-solid border-gray-100 rounded-lg py-10 px-16">
				<Checkbox
					checked={confirmPaid}
					onChange={() => setConfirmPaid((confirm) => !confirm)}
					id="confirm"
					disabled={confirmPaid || isCheckingIn}
				>
					I confirm that {guests.fullName} has paid the total amount of{" "}
					{!addBreakfast
						? formatCurrency(totalPrice)
						: `${formatCurrency(
								totalPrice + optionalBreakfast
						  )} (${formatCurrency(totalPrice)} + ${formatCurrency(
								optionalBreakfast
						  )})`}
				</Checkbox>
			</div>

			<div className="flex gap-[1.2rem] justify-end">
				<button
					className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium text-indigo-50 bg-indigo-600 hover:bg-indigo-700 rounded-lg focus:outline-0 focus:outline-offset-0"
					onClick={handleCheckin}
					disabled={!confirmPaid || isCheckingIn}
				>
					Check in booking #{bookingId}
				</button>
				<button
					className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-[#18212f] hover:bg-gray-50 rounded-lg focus:outline-0 focus:outline-offset-0 border border-solid border-gray-300 dark:border-gray-800"
					onClick={moveBack}
				>
					Back
				</button>
			</div>
		</>
	);
};

export default CheckinBooking;
