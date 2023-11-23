import { useUser } from "./useUser";

const UserAvatar = () => {
	const { user } = useUser();

	const { fullName, avatar } = user.user_metadata;

	return (
		<div className="flex gap-5 items-center font-medium text-2xl text-gray-600">
			<img
				className="block w-16 aspect-square object-cover object-center outline-2 outline outline-gray-100 rounded-full"
				src={avatar || "default-user.jpg"}
				alt={`Avatar of ${fullName}`}
			/>

			<span>{fullName}</span>
		</div>
	);
};

export default UserAvatar;
