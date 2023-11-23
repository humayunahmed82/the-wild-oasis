import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";

const Settings = () => {
	return (
		<div className="flex flex-col gap-[1.6rem]">
			<h1 className="text-5xl font-semibold mb-12">Update hotel settings</h1>
			<UpdateSettingsForm />
		</div>
	);
};

export default Settings;
