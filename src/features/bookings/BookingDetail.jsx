import { useNavigate } from "react-router-dom";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";

import Spinner from "../../ui/Spinner";
import BookingDataBox from "./BookingDataBox";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Empty from "../../ui/Empty";

import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";

const BookingDetail = () => {
	const { booking, isLoading } = useBooking();
	const { checkout, isCheckingOut } = useCheckout();
	const { isDeleting, deleteBooking } = useDeleteBooking();

	const moveBack = useMoveBack();
	const navigate = useNavigate();

	if (isLoading) return <Spinner />;

	if (!booking) return <Empty resourceName="Booking" />;

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
				<Modal>
					<Modal.Open opens="delete">
						<button className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium text-red-50 bg-red-700 hover:bg-red-800 rounded-lg focus:outline-0 focus:outline-offset-0">
							Delete Booking
						</button>
					</Modal.Open>
					<Modal.Window name="delete">
						<ConfirmDelete
							resourceName="bookings"
							disabled={isDeleting}
							onConfirm={() => {
								deleteBooking(bookingId, {
									onSettled: () => navigate(-1),
								});
							}}
						/>
					</Modal.Window>
				</Modal>
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
					className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-[#18212f] hover:bg-gray-50 rounded-lg focus:outline-0 focus:outline-offset-0 border border-solid border-gray-300 dark:border-gray-800"
					onClick={() => moveBack()}
				>
					Back
				</button>
			</div>
		</>
	);
};

export default BookingDetail;
