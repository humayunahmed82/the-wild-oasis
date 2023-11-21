import { useEffect, useState } from "react";

import Spinner from "../../ui/Spinner";
import BookingDataBox from "../../features/bookings/BookingDataBox";
import Checkbox from "../../ui/Checkbox";

import { useBooking } from "../bookings/useBooking";
import { useMoveBack } from "../../hooks/useMoveBack";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";

const CheckinBooking = () => {
	const [confirmPaid, setConfirmPaid] = useState(false);

	const { isLoading, booking } = useBooking();

	useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

	const moveBack = useMoveBack();

	const { checkin, isCheckingIn } = useCheckin();

	if (isLoading) return <Spinner />;

	const {
		id: bookingId,
		guests,
		totalPrice,
		numGuests,
		hasBreakfast,
		numNights,
	} = booking;

	const handleCheckin = () => {
		if (!confirmPaid) return;
		checkin(bookingId);
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

			<div className="bg-white border border-solid border-gray-100 rounded-lg py-10 px-16">
				<Checkbox
					checked={confirmPaid}
					onChange={() => setConfirmPaid((confirm) => !confirm)}
					id="confirm"
					disabled={confirmPaid || isCheckingIn}
				>
					I confirm that {guests.fullName} has paid the total amount of{" "}
					{formatCurrency(totalPrice)}
				</Checkbox>
			</div>

			<div className="flex gap-[1.2rem] justify-end">
				<button
					className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium text-indigo-50 bg-indigo-600 hover:bg-indigo-700"
					onClick={handleCheckin}
					disabled={!confirmPaid || isCheckingIn}
				>
					Check in booking #{bookingId}
				</button>
				<button
					className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium text-gray-600 bg-white hover:bg-gray-50"
					onClick={moveBack}
				>
					Back
				</button>
			</div>
		</>
	);
};

export default CheckinBooking;
