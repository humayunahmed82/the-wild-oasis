import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";

const Account = () => {
	return (
		<>
			<h1 className="text-5xl font-semibold">Update your account</h1>

			<div className="flex flex-col gap-[1.6rem]">
				<h3 className="text-[2rem] font-medium">Update user data</h3>
				<UpdateUserDataForm />
			</div>

			<div className="flex flex-col gap-[1.6rem]">
				<h3 className="text-[2rem] font-medium">Update password</h3>
				<UpdatePasswordForm />
			</div>
		</>
	);
};

export default Account;
