import BookingDataBox from "./BookingDataBox";

import { useMoveBack } from "../../hooks/useMoveBack";

const BookingDetail = () => {
	const booking = {};
	const status = "checked-in";

	const moveBack = useMoveBack();

	const statusToTagName = {
		unconfirmed: "blue",
		"checked-in": "green",
		"checked-out": "silver",
	};

	return (
		<>
			<div className="flex justify-between items-center">
				<div className="flex gap-[2.4rem] items-center">
					<h1 className="text-5xl font-medium">Booking #X</h1>
					<span
						className={`w-[fit-content] uppercase text-[1.1rem] font-semibold py-[0.4rem] px-[1.2rem] rounded-lg ${statusToTagName[status]} `}
					>
						{status.replace("-", " ")}
					</span>
				</div>
				<button
					className="text-indigo-600 font-medium items-center transition-all duration-300 bg-transparent bottom-0 rounded-lg hover:text-indigo-700 active:text-indigo-700 focus:outline-0 focus:outline-offset-0"
					onClick={moveBack}
				>
					&larr; Back
				</button>
			</div>

			<BookingDataBox booking={booking} />

			<div className="flex gap-[1.2rem] justify-end">
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

export default BookingDetail;
