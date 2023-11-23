import { format, isToday } from "date-fns";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";

import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

import {
	HiArrowDownOnSquare,
	HiArrowUpOnSquare,
	HiEye,
	HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";

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
	const navigate = useNavigate();

	const { checkout, isCheckingOut } = useCheckout();
	const { isDeleting, deleteBooking } = useDeleteBooking();

	const statusToTagName = {
		unconfirmed: "bg-indigo-100 text-indigo-700",
		"checked-in": "green bg-green-100 text-green-700",
		"checked-out": "bg-gray-200 text-gray-700",
	};

	return (
		<Table.Row>
			<div className="text-[1.6rem] text-gray-600 dark:text-gray-300 font-semibold font-sono">
				{cabinName}
			</div>

			<div className="flex flex-col gap-[0.2rem]">
				<span className="font-medium">{guestName}</span>
				<span className="text-gray-500 dark:text-gray-400 text-[1.2rem]">
					{email}
				</span>
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

			<Modal>
				<Menus.Menu>
					<Menus.Toggle id={bookingId} />
					<Menus.List id={bookingId}>
						<Menus.Button
							icon={<HiEye />}
							onClick={() => navigate(`/bookings/${bookingId}`)}
						>
							See Details
						</Menus.Button>
						{status === "unconfirmed" && (
							<Menus.Button
								icon={<HiArrowDownOnSquare />}
								onClick={() => navigate(`/checkin/${bookingId}`)}
							>
								Check in
							</Menus.Button>
						)}
						{status === "checked-in" && (
							<Menus.Button
								icon={<HiArrowUpOnSquare />}
								onClick={() => checkout(bookingId)}
								disabled={isCheckingOut}
							>
								Check out
							</Menus.Button>
						)}
						<Modal.Open opens="deleteBooking">
							<Menus.Button icon={<HiTrash />}>Delete Booking</Menus.Button>
						</Modal.Open>
					</Menus.List>

					<Modal.Window name="deleteBooking">
						<ConfirmDelete
							resourceName="bookings"
							disabled={isDeleting}
							onConfirm={() => deleteBooking(bookingId)}
						/>
					</Modal.Window>
				</Menus.Menu>
			</Modal>
		</Table.Row>
	);
};

export default BookingRow;
