import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

const useDeleteBooking = () => {
	const queryClient = useQueryClient();

	const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
		mutationFn: deleteBookingApi,
		onSuccess: () => {
			toast.success("Booking Successfully deleted");

			queryClient.invalidateQueries({
				queryKey: ["bookings"],
			});
		},
		onError: (err) => toast.error(err.message),
	});

	return { isDeleting, deleteBooking };
};

export { useDeleteBooking };
