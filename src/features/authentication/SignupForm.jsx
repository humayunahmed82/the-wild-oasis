import { useForm } from "react-hook-form";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

const SignupForm = () => {
	const { signup, isLoading } = useSignup();

	const { register, formState, getValues, handleSubmit, reset } = useForm();
	const { errors } = formState;

	const onSubmit = ({ fullName, email, password }) => {
		signup(
			{ fullName, email, password },
			{
				onSettled: () => reset(),
			}
		);
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)} type="regular">
			<FormRow label="Full name" error={errors?.fullName?.message}>
				<input
					className={Input}
					disabled={isLoading}
					type="text"
					id="fullName"
					{...register("fullName", { required: "This field is required" })}
				/>
			</FormRow>

			<FormRow label="Email address" error={errors?.email?.message}>
				<input
					className={Input}
					disabled={isLoading}
					type="email"
					id="email"
					{...register("email", {
						required: "This field is required",
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: "Please enter a valid email address",
						},
					})}
				/>
			</FormRow>

			<FormRow
				label="Password (min 8 characters)"
				error={errors?.password?.message}
			>
				<input
					className={Input}
					disabled={isLoading}
					type="password"
					id="password"
					{...register("password", {
						required: "This field is required",
						minLength: {
							value: 8,
							message: "Password need a minimum of 8 characters",
						},
					})}
				/>
			</FormRow>

			<FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
				<input
					className={Input}
					disabled={isLoading}
					type="password"
					id="passwordConfirm"
					{...register("passwordConfirm", {
						required: "This field is required",
						validate: (value) =>
							value === getValues().password || "Passwords  need to match",
					})}
				/>
			</FormRow>

			<FormRow>
				<button
					className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium rounded-lg text-gray-600 bg-white hover:bg-gray-50 border border-solid border-gray-300 focus:outline-0 focus:outline-offset-0"
					type="reset"
					disabled={isLoading}
				>
					Cancel
				</button>
				<button
					className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium rounded-lg text-indigo-50 bg-indigo-600 hover:bg-indigo-700 focus:outline-0 focus:outline-offset-0"
					disabled={isLoading}
				>
					Create new user
				</button>
			</FormRow>
		</Form>
	);
};

export default SignupForm;
