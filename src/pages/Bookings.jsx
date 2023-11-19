import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

const Bookings = () => {
	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="text-5xl font-medium">All bookings</h1>

				<BookingTableOperations />
			</div>
			<BookingTable />
		</>
	);
};

export default Bookings;
