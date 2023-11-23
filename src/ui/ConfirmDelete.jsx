const ConfirmDelete = ({ resourceName, onConfirm, disabled, onCloseModal }) => {
	return (
		<div className="w-[40rem] flex flex-col gap-[1.2rem]">
			<h3 className="text-[2rem] font-medium">Delete {resourceName}</h3>
			<p className="text-gray-500 mb-[1.2rem]">
				Are you sure you want to delete this {resourceName} permanently? This
				action cannot be undone.
			</p>

			<div className="flex justify-center gap-[1.2rem]">
				<button
					className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium text-gray-600 bg-white hover:bg-gray-50 rounded-lg focus:outline-0 focus:outline-offset-0 border border-solid border-gray-300"
					onClick={() => onCloseModal?.()}
					disabled={disabled}
				>
					Cancel
				</button>
				<button
					className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium text-red-50 bg-red-700 hover:bg-red-800 rounded-lg focus:outline-0 focus:outline-offset-0"
					onClick={onConfirm}
					disabled={disabled}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default ConfirmDelete;
