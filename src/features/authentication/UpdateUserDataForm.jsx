import { useState } from "react";

import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

const UpdateUserDataForm = () => {
	// We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
	const {
		user: {
			email,
			user_metadata: { fullName: currentFullName },
		},
	} = useUser();

	const { isUpdating, updateUser } = useUpdateUser();

	const [fullName, setFullName] = useState(currentFullName);
	const [avatar, setAvatar] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!fullName) return;

		updateUser(
			{ fullName, avatar },
			{
				onSettled: () => {
					setAvatar(null);
					e.target.reset();
				},
			}
		);
	};

	const handleCancel = () => {
		setFullName(currentFullName);
		setAvatar(null);
	};

	return (
		<Form onSubmit={handleSubmit} type="regular">
			<FormRow label="Email address">
				<input className={Input} value={email} disabled />
			</FormRow>
			<FormRow label="Full name">
				<input
					className={Input}
					type="text"
					value={fullName}
					onChange={(e) => setFullName(e.target.value)}
					id="fullName"
					disabled={isUpdating}
				/>
			</FormRow>
			<FormRow label="Avatar image">
				<input
					className={FileInput}
					type="file"
					id="avatar"
					accept="image/*"
					onChange={(e) => setAvatar(e.target.files[0])}
					disabled={isUpdating}
				/>
			</FormRow>
			<FormRow>
				<button
					className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium rounded-lg text-gray-600 dark:text-gray-300 bg-white dark:bg-[#18212f] hover:bg-gray-50 border border-solid border-gray-300 dark:border-gray-800 focus:outline-0 focus:outline-offset-0"
					type="reset"
					disabled={isUpdating}
					onClick={handleCancel}
				>
					Cancel
				</button>
				<button
					className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium rounded-lg text-indigo-50 bg-indigo-600 hover:bg-indigo-700 focus:outline-0 focus:outline-offset-0"
					disabled={isUpdating}
				>
					Update account
				</button>
			</FormRow>
		</Form>
	);
};

export default UpdateUserDataForm;
