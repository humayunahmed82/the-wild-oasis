import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

const useUpdateSetting = () => {
	const queryClient = useQueryClient();

	const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
		mutationFn: updateSettingApi,
		onSuccess: () => {
			toast.success("Settings  successfully Updated");
			queryClient.invalidateQueries({
				queryKey: ["settings"],
			});
		},
		onError: (err) => toast.error(err.message),
	});

	return { isUpdating, updateSetting };
};

export { useUpdateSetting };
