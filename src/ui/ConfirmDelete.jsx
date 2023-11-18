import Button from "./Button";

const ConfirmDelete = ({ resourceName, onConfirm, disabled, onCloseModal }) => {
	return (
		<div className="w-[40rem] flex flex-col gap-[1.2rem]">
			<h3 className="text-[2rem] font-medium">Delete {resourceName}</h3>
			<p className="text-gray-500 mb-[1.2rem]">
				Are you sure you want to delete this {resourceName} permanently? This
				action cannot be undone.
			</p>

			<div className="flex justify-center gap-[1.2rem]">
				<Button
					variation="secondary"
					onClick={() => onCloseModal?.()}
					disabled={disabled}
				>
					Cancel
				</Button>
				<Button variation="danger" onClick={onConfirm} disabled={disabled}>
					Delete
				</Button>
			</div>
		</div>
	);
};

export default ConfirmDelete;
