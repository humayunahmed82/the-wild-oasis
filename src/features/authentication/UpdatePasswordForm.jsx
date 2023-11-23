import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUpdateUser } from "./useUpdateUser";

const UpdatePasswordForm = () => {
	const { register, handleSubmit, formState, getValues, reset } = useForm();
	const { errors } = formState;

	const { updateUser, isUpdating } = useUpdateUser();

	const onSubmit = ({ password }) => {
		updateUser({ password }, { onSuccess: reset });
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)} type="regular">
			<FormRow
				label="Password (min 8 characters)"
				error={errors?.password?.message}
			>
				<input
					className={Input}
					type="password"
					id="password"
					autoComplete="current-password"
					disabled={isUpdating}
					{...register("password", {
						required: "This field is required",
						minLength: {
							value: 8,
							message: "Password needs a minimum of 8 characters",
						},
					})}
				/>
			</FormRow>

			<FormRow
				label="Confirm password"
				error={errors?.passwordConfirm?.message}
			>
				<input
					className={Input}
					type="password"
					autoComplete="new-password"
					id="passwordConfirm"
					disabled={isUpdating}
					{...register("passwordConfirm", {
						required: "This field is required",
						validate: (value) =>
							getValues().password === value || "Passwords need to match",
					})}
				/>
			</FormRow>
			<FormRow>
				<button
					className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium rounded-lg text-gray-600 bg-white hover:bg-gray-50 border border-solid border-gray-300 focus:outline-0 focus:outline-offset-0"
					onClick={reset}
					type="reset"
				>
					Cancel
				</button>
				<button
					className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium rounded-lg text-indigo-50 bg-indigo-600 hover:bg-indigo-700 focus:outline-0 focus:outline-offset-0"
					disabled={isUpdating}
				>
					Update password
				</button>
			</FormRow>
		</Form>
	);
};

export default UpdatePasswordForm;
