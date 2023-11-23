import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

const AddCabin = () => {
	return (
		<div>
			<Modal>
				<Modal.Open opens="cabin-form">
					<button className="text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium text-indigo-50 bg-indigo-600 hover:bg-indigo-700 rounded-lg focus:outline-0 focus:outline-offset-0 ">
						{" "}
						Add new cabin{" "}
					</button>
				</Modal.Open>
				<Modal.Window name="cabin-form">
					<CreateCabinForm />
				</Modal.Window>
			</Modal>
		</div>
	);
};

export default AddCabin;
