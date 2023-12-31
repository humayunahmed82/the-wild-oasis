import { useBookings } from "./useBookings";

import Spinner from "../../ui/Spinner";
import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";

const BookingTable = () => {
	const { isLoading, bookings, count } = useBookings();

	if (isLoading) return <Spinner />;

	if (!bookings.length) return <Empty resourceName="Bookings" />;

	return (
		<Menus>
			<Table columns="grid-cols-[0.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem]">
				<Table.Header>
					<div>Cabin</div>
					<div>Guest</div>
					<div>Dates</div>
					<div>Status</div>
					<div>Amount</div>
					<div></div>
				</Table.Header>

				<Table.Body
					data={bookings}
					render={(booking) => (
						<BookingRow key={booking.id} booking={booking} />
					)}
				/>

				{count >= 10 && (
					<Table.Footer>
						<Pagination count={count} />
					</Table.Footer>
				)}
			</Table>
		</Menus>
	);
};

export default BookingTable;
