import { useForm } from "react-hook-form";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import FileInput from "../../ui/FileInput";

const CreateCabinForm = ({ cabinToEdit = {}, onCloseModal }) => {
	const { isCreating, createCabin } = useCreateCabin();
	const { isEditing, editCabin } = useEditCabin();
	const isWorking = isCreating || isEditing;

	const { id: editId, ...editValues } = cabinToEdit;
	const isEditSession = Boolean(editId);

	const { register, handleSubmit, reset, getValues, formState } = useForm({
		defaultValues: isEditSession ? editValues : {},
	});

	const { errors } = formState;

	const onSubmit = (data) => {
		const image = typeof data.image === "string" ? data.image : data.image[0];

		if (isEditSession)
			editCabin(
				{ newCabinData: { ...data, image }, id: editId },
				{
					onSuccess: (data) => {
						reset();
						onCloseModal?.();
					},
				}
			);
		else
			createCabin(
				{ ...data, image: image },
				{
					onSuccess: (data) => {
						reset();
						onCloseModal?.();
					},
				}
			);
	};
	const onError = (error) => {};

	return (
		<Form
			onSubmit={handleSubmit(onSubmit, onError)}
			type={onCloseModal ? "modal" : "regular"}
		>
			<FormRow label="Cabin name" error={errors?.name?.message}>
				<input
					className={Input}
					type="text"
					id="name"
					disabled={isWorking}
					{...register("name", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
				<input
					className={Input}
					type="number"
					id="maxCapacity"
					disabled={isWorking}
					{...register("maxCapacity", {
						required: "This field is required",
						min: {
							value: 1,
							message: "Capacity should be at less than 1",
						},
					})}
				/>
			</FormRow>

			<FormRow label="Regular price" error={errors?.regularPrice?.message}>
				<input
					className={Input}
					type="number"
					id="regularPrice"
					disabled={isWorking}
					{...register("regularPrice", {
						required: isEditSession ? false : "This field is required",
					})}
				/>
			</FormRow>

			<FormRow label="Discount" error={errors?.discount?.message}>
				<input
					className={Input}
					type="number"
					id="discount"
					disabled={isWorking}
					defaultValue={0}
					{...register("discount", {
						required: "This field is required",
						validate: (value) =>
							Number(value) <= Number(getValues().regularPrice) ||
							"Discount should be less than regular Price",
					})}
				/>
			</FormRow>

			<FormRow
				label="Description for website"
				error={errors?.description?.message}
			>
				<textarea
					className={Textarea}
					type="number"
					id="description"
					defaultValue=""
					{...register("description", {
						required: "This field is required",
					})}
				></textarea>
			</FormRow>

			<FormRow label="Cabin photo">
				<input
					className={FileInput}
					type="file"
					id="image"
					accept="image/*"
					{...register("image", {
						required: isEditSession ? false : "This field is required",
					})}
				/>
			</FormRow>

			<FormRow>
				{/* type is an HTML attribute! */}
				<button
					className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium text-gray-600 bg-white hover:bg-gray-50"
					type="reset"
					onClick={() => onCloseModal?.()}
				>
					Cancel
				</button>
				<button
					className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium text-indigo-50 bg-indigo-600 hover:bg-indigo-700"
					disabled={isWorking}
				>
					{isEditSession ? "Edit Cabin" : "Create new cabin"}
				</button>
			</FormRow>
		</Form>
	);
};

export default CreateCabinForm;
