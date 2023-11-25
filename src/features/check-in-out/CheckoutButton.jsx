import { useCheckout } from "./useCheckout";

const CheckoutButton = ({ bookingId }) => {
	const { checkout, isCheckingOut } = useCheckout();

	return (
		<button
			onClick={() => checkout(bookingId)}
			disabled={isCheckingOut}
			className="text-[1.2rem] py-1 px-2 uppercase font-semibold text-center rounded-lg whitespace-nowrap text-indigo-50 bg-indigo-600 hover:bg-indigo-700 focus:outline-0 focus:outline-offset-0"
		>
			Check out
		</button>
	);
};

export default CheckoutButton;
