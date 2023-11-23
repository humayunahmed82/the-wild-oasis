import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const CabinRow = ({ cabin }) => {
	const { isDeleting, deleteCabin } = useDeleteCabin();
	const { isCreating, createCabin } = useCreateCabin();

	const {
		id: cabinId,
		name,
		maxCapacity,
		regularPrice,
		discount,
		description,
		image,
	} = cabin;

	const handelDuplicate = () => {
		createCabin({
			name: `Copy of ${name}`,
			maxCapacity,
			regularPrice,
			discount,
			description,
			image,
		});
	};

	return (
		<Table.Row>
			<img
				src={image}
				alt={name}
				className="block w-[6.4rem] aspect-[3_/_2] object-cover object-center scale-150 -translate-x-[7px]"
			/>

			<div className="text-[1.6rem] text-gray-600 dark:text-gray-300 font-semibold font-sono">
				{name}
			</div>

			<div>Fist up to {maxCapacity} guests</div>

			<div className="font-semibold font-sono">
				{formatCurrency(regularPrice)}
			</div>

			{discount ? (
				<div className="font-semibold font-sono text-gray-700 dark:text-gray-200">
					{formatCurrency(discount)}
				</div>
			) : (
				<span>&mdash;</span>
			)}
			<div className="">
				<Modal>
					<Menus.Menu>
						<Menus.Toggle id={cabinId} />

						<Menus.List id={cabinId}>
							<Menus.Button icon={<HiSquare2Stack />} onClick={handelDuplicate}>
								Duplicate
							</Menus.Button>

							<Modal.Open opens="edit-cabin">
								<Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
							</Modal.Open>

							<Modal.Open opens="delete">
								<Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
							</Modal.Open>
						</Menus.List>

						<Modal.Window name="edit-cabin">
							<CreateCabinForm cabinToEdit={cabin} />
						</Modal.Window>

						<Modal.Window name="delete">
							<ConfirmDelete
								resourceName="cabins"
								disabled={isDeleting}
								onConfirm={() => deleteCabin(cabinId)}
							/>
						</Modal.Window>
					</Menus.Menu>
				</Modal>
			</div>
		</Table.Row>
	);
};

export default CabinRow;
