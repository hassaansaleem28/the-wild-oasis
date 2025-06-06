import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNeditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useUpdateCabin() {
  const queryClient = useQueryClient();
  const { mutate: mutateEdit, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createNeditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: error => toast.error(error.message),
  });
  return { mutateEdit, isEditing };
}
