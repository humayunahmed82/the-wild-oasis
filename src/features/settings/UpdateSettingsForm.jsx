import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

const UpdateSettingsForm = () => {
	const {
		isLoading,
		settings: {
			minBookingLength,
			maxBookingLength,
			maxGuestsPerBooking,
			breakfastPrice,
		} = {},
	} = useSettings();

	const { isUpdating, updateSetting } = useUpdateSetting();

	if (isLoading) return <Spinner />;

	const handelUpdate = (e, field) => {
		const { value } = e.target;
		updateSetting({ [field]: value });
	};

	return (
		<Form type="regular">
			<FormRow label="Minimum nights/booking">
				<input
					className={Input}
					type="number"
					id="min-nights"
					defaultValue={minBookingLength}
					disabled={isUpdating}
					onBlur={(e) => handelUpdate(e, "minBookingLength")}
				/>
			</FormRow>
			<FormRow label="Maximum nights/booking">
				<input
					className={Input}
					type="number"
					id="max-nights"
					defaultValue={maxBookingLength}
					disabled={isUpdating}
					onBlur={(e) => handelUpdate(e, "maxBookingLength")}
				/>
			</FormRow>
			<FormRow label="Maximum guests/booking">
				<input
					className={Input}
					type="number"
					id="max-guests"
					defaultValue={maxGuestsPerBooking}
					disabled={isUpdating}
					onBlur={(e) => handelUpdate(e, "maxGuestsPerBooking")}
				/>
			</FormRow>
			<FormRow label="Breakfast price">
				<input
					className={Input}
					type="number"
					id="breakfast-price"
					defaultValue={breakfastPrice}
					disabled={isUpdating}
					onBlur={(e) => handelUpdate(e, "breakfastPrice")}
				/>
			</FormRow>
		</Form>
	);
};

export default UpdateSettingsForm;
