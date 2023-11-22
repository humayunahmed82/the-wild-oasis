import { useNavigate } from "react-router-dom";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";

import Spinner from "../../ui/Spinner";
import BookingDataBox from "./BookingDataBox";
import { useCheckout } from "../check-in-out/useCheckout";

const BookingDetail = () => {
	const { booking, isLoading } = useBooking();
	const { checkout, isCheckingOut } = useCheckout();

	const moveBack = useMoveBack();
	const navigate = useNavigate();

	if (isLoading) return <Spinner />;

	const { status, id: bookingId } = booking;

	const statusToTagName = {
		unconfirmed: "bg-indigo-100 text-indigo-700",
		"checked-in": "green bg-green-100 text-green-700",
		"checked-out": "bg-gray-200 text-gray-700",
	};

	return (
		<>
			<div className="flex justify-between items-center">
				<div className="flex gap-[2.4rem] items-center">
					<h1 className="text-5xl font-medium">Booking #{bookingId}</h1>
					<span
						className={`w-[fit-content] uppercase text-[1.1rem] font-semibold py-[0.4rem] px-[1.2rem] rounded-lg ${statusToTagName[status]} `}
					>
						{status.replace("-", " ")}
					</span>
				</div>
				<button
					className="text-indigo-600 font-medium items-center transition-all duration-300 bg-transparent bottom-0 rounded-lg hover:text-indigo-700 active:text-indigo-700 focus:outline-0 focus:outline-offset-0"
					onClick={() => moveBack()}
				>
					&larr; Back
				</button>
			</div>

			<BookingDataBox booking={booking} />

			<div className="flex gap-[1.2rem] justify-end">
				{status === "unconfirmed" && (
					<button
						className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium text-indigo-50 bg-indigo-600 hover:bg-indigo-700 rounded-lg focus:outline-0 focus:outline-offset-0"
						onClick={() => navigate(`/checkin/${bookingId}`)}
					>
						Check in
					</button>
				)}
				{status === "checked-in" && (
					<button
						className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium text-indigo-50 bg-indigo-600 hover:bg-indigo-700 rounded-lg focus:outline-0 focus:outline-offset-0"
						onClick={() => checkout(bookingId)}
						disabled={isCheckingOut}
					>
						Check out
					</button>
				)}
				<button
					className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium text-gray-600 bg-white hover:bg-gray-50 rounded-lg focus:outline-0 focus:outline-offset-0"
					onClick={() => moveBack()}
				>
					Back
				</button>
			</div>
		</>
	);
};

export default BookingDetail;
