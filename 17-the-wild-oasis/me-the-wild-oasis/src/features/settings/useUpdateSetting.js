import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export const useUpdateSetting = () => {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings successfully Updated.");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isUpdating, updateSetting };
};
